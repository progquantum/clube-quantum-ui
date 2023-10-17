export type Establishment = {
  user_id: string;
  fantasy_name: string;
  contacts: Contacts;
  category_id: string;
  coordinates: string;
};

export type Contacts = {
  main_phone_has_whatsapp: boolean;
  cel_phone: string;
  cel_phone_has_whatsapp: boolean;
  whatsapp_phone: string;
};
