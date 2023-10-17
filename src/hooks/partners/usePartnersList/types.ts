export interface Data {
  partnerList: PartnerList[];
}

export interface PartnerList {
  id: string;
  name: string;
  logo_url: string;
  created_at: string;
  updated_at: string;
}
