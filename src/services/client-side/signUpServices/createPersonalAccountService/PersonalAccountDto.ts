class Address {
  street: string;
  number: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

export class PersonalAccountDto {
  name: string;
  phone: string;
  cpf: string;
  email: string;
  password: string;
  invitedBy: string | null;
  birthDate: string;
  address: Address;
}
