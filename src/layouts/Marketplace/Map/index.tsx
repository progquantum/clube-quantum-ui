import React, { useState, useEffect } from 'react';

import { Fallback } from './Fallback';
import { Mapbox } from './Mapbox';

export function Map() {
  const [isGeolocationOn, setIsGeolocationOn] = useState(false);
  const [currentLat, setCurrentLat] = useState(-70.9);
  const [currentLng, setCurrentLng] = useState(42.35);
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

  return isGeolocationOn ? (
    <Mapbox lat={currentLat} lng={currentLng} />
  ) : (
    <Fallback />
  );
}
