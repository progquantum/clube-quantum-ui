import React, { useState, useEffect, useMemo } from 'react';

import { PulseLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import { useGetNearbyEstablishments } from 'hooks/establishment/useGetNearbyEstablishments';

import { Loading } from 'components/Loading';

import { Fallback } from './Fallback';
import { FilterMap } from './FilterMap';

export function Map() {
  const [isGeolocationOn, setIsGeolocationOn] = useState(false);
  const { colors } = useTheme();
  const [currentLat, setCurrentLat] = useState<number | null>(null);
  const [currentLng, setCurrentLng] = useState<number | null>(null);

  const formattedCoordinates = useMemo(() => {
    if (currentLat && currentLng) return `${currentLat},${currentLng}`;
  }, [currentLat, currentLng]);

  const { data: establishments, isLoading } =
    useGetNearbyEstablishments(formattedCoordinates);

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
