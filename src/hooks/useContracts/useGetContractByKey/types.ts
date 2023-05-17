export type PersonalInformation = {
  name: string;
  birth_date: string;
  email: string;
};

export type ContractInformation = {
  name: string;
  plan_name: string;
  date_of_acquisition: Date;
  monthly_fee: number;
  phone_number: string;
  area_code: string;
};

export type ResponseData = {
  personal_information: PersonalInformation;
  contract_information: ContractInformation;
  download_document: string;
};
