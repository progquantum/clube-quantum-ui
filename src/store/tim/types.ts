import { Plan } from 'hooks/partners/usePartners/types';

export type TimPlanStore = {
  selectedPlan: Plan;
  setPlan: (plan: Plan) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  whichPath: 'pathOne' | 'pathTwo' | 'default';
  setPath: (path: string) => void;
  selectedDDD: string;
  setDDD: (ddd: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  pinCode: string;
  setPinCode: (pinCode: string) => void;
  isPortability: boolean;
  setIsPortability: (isPortability: boolean) => void;
};
