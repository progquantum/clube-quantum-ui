import React, { useEffect, useMemo, useRef } from 'react';

import { renderToStaticMarkup } from 'react-dom/server';

import { useTheme } from 'styled-components';

import { HiLocationMarker } from 'react-icons/hi';

import { loader } from 'utils/googleMapsLoader';

import { EstablishmentLocation, FilterMapProps } from './types';

export function FilterMap({ establishments, userLocation }: FilterMapProps) {
  const mapRef = useRef(null);
  const { colors } = useTheme();

  const createMarkerIcon = () => {
    const svgString = renderToStaticMarkup(
      <HiLocationMarker color={colors.danger} />,
    );
    const encodedSvg = encodeURIComponent(svgString);
    return `data:image/svg+xml;charset=UTF-8,${encodedSvg}`;
  };

  const mapOptions = useMemo(
    () => ({
      center: {
        lat: Number(userLocation.latitude),
        lng: Number(userLocation.longitude),
      },
      zoom: 16,
    }),
    [userLocation.latitude, userLocation.longitude],
  );

  useEffect(() => {
    loader.load().then(google => {
      const map = new google.maps.Map(mapRef.current, mapOptions);

      if (establishments.length > 0) {
        establishments.forEach((establishment: EstablishmentLocation) => {
          const markerIcon = createMarkerIcon();
          const markerOptions = {
            title: establishment.corporate_name,
            position: {
              lat: Number(establishment.latitude),
              lng: Number(establishment.longitude),
            },
            icon: {
              url: markerIcon,
              scaledSize: new google.maps.Size(48, 48),
              anchor: new google.maps.Point(24, 48),
            },
            map,
          };

          const marker = new google.maps.Marker(markerOptions);
        });
      }
    });
  }, [establishments]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', marginBottom: '4rem' }}
    />
  );
}
