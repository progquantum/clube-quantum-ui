import { useEffect, useMemo, useRef } from 'react';

import { loader } from 'utils/googleMapsLoader';

export function GoogleMap({
  corporateName,
  lat,
  long,
}: {
  corporateName: string;
  lat: number;
  long: number;
}) {
  const mapRef = useRef(null);

  const mapOptions = useMemo(
    () => ({
      center: { lat, lng: long },
      zoom: 16,
    }),
    [lat, long],
  );

  useEffect(() => {
    loader.load().then(google => {
      const map = new google.maps.Map(mapRef.current, mapOptions);

      const markerOptions = {
        title: corporateName,
        position: { lat, lng: long },
        map,
      };

      const marker = new google.maps.Marker(markerOptions);
    });
  }, [lat, long]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', marginBottom: '4rem' }}
    />
  );
}
