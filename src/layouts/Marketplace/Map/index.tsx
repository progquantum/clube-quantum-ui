import React, { useState, useEffect, useMemo } from 'react';
import { PulseLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { useQueryClient } from 'react-query';

import { useGetNearbyEstablishments } from 'hooks/establishment/useGetNearbyEstablishments';
import { Category } from 'hooks/establishment/useGetCategories/types';
import { Loading } from 'components/Loading';

import { Fallback } from './Fallback';
import { FilterMap } from './FilterMap';

export function Map({ categoryId }: { categoryId: string }) {
  const { colors } = useTheme();
  const [isGeolocationOn, setIsGeolocationOn] = useState(false);
  const [currentLat, setCurrentLat] = useState<number | null>(null);
  const [currentLng, setCurrentLng] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const categories: Category[] = queryClient.getQueryData(
    'get-pos-filter-categories',
  );

  const formattedCoordinates = useMemo(() => {
    if (currentLat && currentLng) return `${currentLat},${currentLng}`;
  }, [currentLat, currentLng]);

  const category = categories.find(
    (category: Category) => category.id === categoryId && category.name,
  );

  const params = {
    userOrigin: formattedCoordinates,
    ...(category ? { category: category.name } : {}),
  };

  const { data: establishments, isLoading } =
    useGetNearbyEstablishments(params);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    const crd = pos.coords;
    setCurrentLat(crd.latitude);
    setCurrentLng(crd.longitude);
    setIsGeolocationOn(true);
  }

  function error(err: { code: number; message: string }) {
    if (err.message === 'User denied Geolocation') {
      setIsGeolocationOn(false);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if (!isGeolocationOn) return <Fallback />;

  return isLoading || !establishments ? (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <Loading icon={PulseLoader} color={colors.mediumslateBlue} />
    </div>
  ) : (
    <FilterMap
      userLocation={{
        latitude: String(currentLat),
        longitude: String(currentLng),
      }}
      establishments={establishments}
    />
  );
}
