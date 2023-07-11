export type EstablishmentLocation = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
  corporate_name: string;
  latitude: string;
  longitude: string;
};

export type FilterMapProps = {
  establishments: EstablishmentLocation[];
  userLocation: {
    latitude: string;
    longitude: string;
  };
};
