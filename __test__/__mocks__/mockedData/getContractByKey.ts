export const mockedPersonalInformation = {
  name: 'Test User',
  birth_date: new Date('03/05/2023'),
  email: 'teste@teste.teste',
};

export const mockedContractInformation = {
  name: 'Test Contract',
  plan_name: 'Test Plan',
  date_of_acquisition: new Date('03/05/2023'),
  monthly_fee: 1,
  phone_number: '111111111',
  area_code: '11',
};

export const mockedContractByKey = {
  personal_information: mockedPersonalInformation,
  contract_information: mockedContractInformation,
};
