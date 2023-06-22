export type ResponseData = {
  data: Establishment;
};

export type Establishment = {
  id: string;
  corporate_name: string;
  about: string;
  contacts: Contacts;
  lat_location: string;
  long_location: string;
  MarketplaceImages: MarketplaceImage[];
  category: Category;
  establishment_pos_working_hours: EstablishmentPosWorkingHour[];
  establishment_pos_working_hours_today: EstablishmentPosWorkingHoursToday;
  cashback_split: CashbackSplit;
};

export type Contacts = {
  main_phone_has_whatsapp: boolean;
  cel_phone: string;
  cel_phone_has_whatsapp: boolean;
  whatsapp_phone: string;
};

export type MarketplaceImage = {
  id: string;
  url: string;
  folder: string;
};

export type Category = {
  id: string;
  name: string;
};

export type EstablishmentPosWorkingHour = {
  id: string;
  day_of_week: string;
  opening_time: string;
  closing_time: string;
};

export type EstablishmentPosWorkingHoursToday = {
  day_of_week: string;
  opening_time: string;
  closing_time: string;
};

export type CashbackSplit = {
  id: string;
  client_cashback: number;
};
