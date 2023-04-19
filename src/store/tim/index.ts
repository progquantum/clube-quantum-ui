import { create } from 'zustand';

import { Document } from 'hooks/useContracts/useCreateDocumentRequestSignatureTim/types';

import { Plan } from 'hooks/partners/usePartners/types';

import { TimPlanStore } from './types';

export const useTimPlanStore = create<TimPlanStore>(set => ({
  selectedPlan: {} as Plan,
  setPlan: (plan: Plan) => {
    set(state => {
      if (state.selectedPlan.name === plan.name)
        return { selectedPlan: {} as Plan };
      return { selectedPlan: plan };
    });
  },
  currentStep: 0,
  nextStep: () =>
    set(state => ({
      currentStep: Math.min(7, state.currentStep + 1),
    })),
  previousStep: () => set(state => ({ currentStep: state.currentStep - 1 })),
  setStep: (step: number) => set(() => ({ currentStep: step })),
  whichPath: 'default',
  setPath: (path: 'pathOne' | 'pathTwo' | 'default') => {
    set(() => ({ whichPath: path }));
  },
  selectedDDD: '',
  setDDD: (ddd: string) => {
    set(() => ({ selectedDDD: ddd }));
  },
  phoneNumber: '',
  setPhoneNumber: (phone: string) => set(() => ({ phoneNumber: phone })),
  pinCode: '',
  setPinCode: (pinCode: string) => {
    set(() => ({
      pinCode,
    }));
  },
  isPortability: false,
  setIsPortability: (isPortability: boolean) => set(() => ({ isPortability })),
  contract: {} as Document,
  setContract: (contract: Document) => set(() => ({ contract })),
}));
