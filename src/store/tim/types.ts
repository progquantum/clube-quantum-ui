import { Plan } from 'hooks/usePartners/types';

export type TimPlanStore = {
  selectedPlan: Plan;
  setPlan: (plan: Plan) => void;
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  whichPath: 'pathOne' | 'pathTwo' | 'default';
  setPath: (path: string) => void;
  selectedDDD: string;
  setDDD: (ddd: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  pinCode: string;
  setPinCode: (pinCode: string) => void;
  isPaymentFailed: boolean;
  setPaymentToggle: () => void;
};
