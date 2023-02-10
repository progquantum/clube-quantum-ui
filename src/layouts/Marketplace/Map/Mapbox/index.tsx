import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { MapboxProps } from './types';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export function Mapbox({ lat, lng }: MapboxProps) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [currentLat, setCurrentLat] = useState(lat);
  const [currentLng, setCurrentLng] = useState(lng);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [currentLng, currentLat],
      zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setCurrentLat(map.current.getCenter().lat.toFixed(4));
      setCurrentLng(map.current.getCenter().lng.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div style={{ position: 'relative' }}>
      <div className="sidebar">
        Longitude: {currentLng} | Latitude: {currentLat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
