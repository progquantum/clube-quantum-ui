export type OpenHours = {
  id: string;
  selectDays?: string[];
  time?: string;
}[];

export type CashBackRules = {
  id: string;
  selectDays?: string[];
  rateCashBack?: string;
  rateCliente?: string;
  rateAdm?: string;
}[];

export type MachinePos = {
  id: string;
  serie: string;
}[];

export type Logo = {
  logoURL: string;
  logoFile: File;
};

export type Banner = {
  bannerURL: string;
  bannerFile: File;
};

export type PartnerStore = {
  openHours: OpenHours;
  setOpenDays: (id: string, day: string) => void;
  setOpenHours: (id: string, time: string) => void;
  setRemoveOpenHours: (id: string) => void;
  cashBackRules: CashBackRules;
  setCashBackDays: (id: string, day: string) => void;
  setRateCashBack: (id: string, rateCashBack: string) => void;
  setRateCliente: (id: string, rateCliente: string) => void;
  setRateAdm: (id: string, rateAdm: string) => void;
  setRemoveCashBackRules: (id: string) => void;
  machinePos: MachinePos;
  setMachinePos: (id: string, serie: string) => void;
  setRemoveMachinePos: (id: string) => void;
  aboutEstablishment: string;
  setAbout: (text: string) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  user: string;
  setUser: (user: string) => void;
  companyName: string;
  setCompanyName: (name: string) => void;
  phoneNumber1: string;
  setPhoneNumber1: (phone: string) => void;
  phoneNumber1HasWhatsApp: boolean;
  setPhoneNumber1HasWhatsApp: (event: boolean) => void;
  phoneNumber2: string;
  setPhoneNumber2: (phone: string) => void;
  phoneNumber2HasWhatsApp: boolean;
  setPhoneNumber2HasWhatsApp: (event: boolean) => void;
  phoneNumber3: string;
  setPhoneNumber3: (phone: string) => void;
  categoryValue: string;
  setCategoryValue: (category: string) => void;
  linkGeolocalizacao: string;
  setLinkGeolocalizacao: (link: string) => void;
  logo: Logo;
  setLogo: (url: string, file: File) => void;
  banner: Banner;
  setBanner: (url: string, file: File) => void;
};
