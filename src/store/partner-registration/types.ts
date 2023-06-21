import { PosUser } from 'hooks/user/usePosSubscriptions/types';

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
  logoFile: any;
};

export type Banner = {
  bannerURL: string;
  bannerFile: File;
};

export type PartnerStore = {
  openHours: OpenHours;
  resetOpenHours: () => void;
  setOpenDays: (id: string, day: string) => void;
  setOpenHours: (id: string, time: string) => void;
  setRemoveOpenHours: (id: string) => void;
  cashBackRules: CashBackRules;
  resetCashBackRules: () => void;
  setCashBackDays: (id: string, day: string) => void;
  setRateCashBack: (id: string, rateCashBack: string) => void;
  setRateCliente: (id: string, rateCliente: string) => void;
  setRateAdm: (id: string, rateAdm: string) => void;
  setRemoveCashBackRules: (id: string) => void;
  machinePos: MachinePos;
  resetMachinePos: () => void;
  setMachinePos: (id: string, serie: string) => void;
  setRemoveMachinePos: (id: string) => void;
  aboutEstablishment: string;
  setAbout: (text: string) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  resetCurrentStep: () => void;
  user: PosUser;
  setUser: (user: PosUser) => void;
  fantasyName: string;
  setFantasyName: (name: string) => void;
  mainPhone: string;
  setMainPhone: (phone: string) => void;
  mainPhoneHasWhatsApp: boolean;
  setMainPhoneHasWhatsApp: (event: boolean) => void;
  cellPhone: string;
  setCellPhone: (phone: string) => void;
  cellPhoneHasWhatsApp: boolean;
  setCellPhoneHasWhatsApp: (event: boolean) => void;
  whatsAppPhone: string;
  setWhatsAppPhone: (phone: string) => void;
  categoryId: string;
  setCategoryId: (category: string) => void;
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
  coordinates: string;
  setCoordinates: (link: string) => void;
  logo: Logo;
  setLogo: (url: string, file: File) => void;
  banner: Banner;
  setBanner: (url: string, file: File) => void;
};
