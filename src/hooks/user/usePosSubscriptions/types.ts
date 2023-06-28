export type Filter = {
  name?: string;
};

export type PosUser = {
  id: string;
  created_at: string;
  document: string;
  phone: string;
  login: string;
  legal_person: LegalPerson;
  individual_person: IndividualPerson;
  establishment_pos: EstablishmentPos;
  category: Category;
  MarketplaceImages: MarketplaceImage[];
  PosSerialNumber: PosSerialNumber[];
  establishment_pos_working_hours: EstablishmentPosWorkingHour[];
};
export interface IndividualPerson {
  name: string;
  cpf: string;
}

export interface LegalPerson {
  company_name: string;
  cnpj: string;
}
export interface EstablishmentPos {
  about: string;
  id: string;
  contacts: Contact;
  corporate_name: string;
  lat_location: string;
  long_location: string;
}
export type Contact = {
  main_phone_has_whatsapp: boolean;
  cel_phone: string;
  cel_phone_has_whatsapp: boolean;
  whatsapp_phone: string;
};

export interface Category {
  id: string;
  name: string;
}

export interface MarketplaceImage {
  id: string;
  folder: string;
  key: string;
  url: string;
}

export interface PosSerialNumber {
  id: string;
  serial_number: string;
}

export interface EstablishmentPosWorkingHour {
  id: string;
  day_of_week: string;
  opening_time: string;
  closing_time: string;
  cashback_split: CashbackSplit;
}

export interface CashbackSplit {
  id: string;
  client_cashback: string;
  quantum_cashback: string;
  total_cashback: string;
}

export type PosSubscriptionsProps = PosUser[];
