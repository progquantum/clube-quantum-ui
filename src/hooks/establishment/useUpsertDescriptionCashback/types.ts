export type DescriptionCashback = {
  user_id: string;
  about: string;
  hours_opening: HoursOpening[];
  rules_cashback: RulesCashback[];
  // pos_serial_numbers: string[];
  pos_serials: PosSerials[];
  closed_days_of_week: string[];
};

export interface HoursOpening {
  opening_time: string;
  closing_time: string;
  days_of_week: string[];
}

export interface PosSerials {
  pos_serial_number: string;
  secretToken: string;
}

export interface RulesCashback {
  total_cashback: string;
  client_cashback: string;
  adm_cashback: string;
  days_of_week: string[];
}
