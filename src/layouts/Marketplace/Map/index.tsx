import React, { useState, useEffect } from 'react';

import { Fallback } from './Fallback';
import { Mapbox } from './Mapbox';

export function Map({
  latitude = -70.9,
  longitude = 42.35,
  isEstablishmentProfile,
}: {
  latitude?: number;
  longitude?: number;
  isEstablishmentProfile: boolean;
}) {
  const [isGeolocationOn, setIsGeolocationOn] = useState(
    isEstablishmentProfile,
  );
  const [currentLat, setCurrentLat] = useState(latitude);
  const [currentLng, setCurrentLng] = useState(longitude);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    if (isEstablishmentProfile) return;
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

  return isGeolocationOn ? (
    <Mapbox lat={currentLat} lng={currentLng} />
  ) : (
    <Fallback />
  );
}
