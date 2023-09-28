export type ResponseData = Localization[];

export type Localization = {
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

export type GetNearbyEstablishmentsParams = {
  userOrigin: string;
  category?: string;
};
