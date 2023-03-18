export type TimNumber = {
  id: string;
  phone: string;
  code: string;
  taken_at: null | string;
  created_at: Date;
};

export type ResponseData = {
  tim_numbers: TimNumber[];
};
