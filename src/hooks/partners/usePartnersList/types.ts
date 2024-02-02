export interface Data {
  partnerList: PartnerList[];
}

export interface PartnerList {
  id: string;
  name: string;
  order_by: number;
  inactivated: string | null;
  created_at: string;
  updated_at: string;
}
