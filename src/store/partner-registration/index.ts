import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import produce, { enableMapSet } from 'immer';

import { PosUser } from 'hooks/user/usePosSubscriptions/types';

import {
  Banner,
  CashBackRules,
  Logo,
  MachinePos,
  OpenHours,
  PartnerStore,
} from './types';

enableMapSet();

export const usePartnerStore = create(
  persist<PartnerStore>(
    set => ({
      openHours: [] as OpenHours,
      resetOpenHours: () => {
        set({ openHours: [] as OpenHours });
      },
      setOpenDays: (id: string, day: string) => {
        set(state => {
          const nextState = produce(state.openHours, draft => {
            const opemHourIndex = draft.findIndex(
              openHours => id === openHours?.id,
            );
            const oldSelectDays = state.openHours[opemHourIndex]?.selectDays
              ? state.openHours[opemHourIndex].selectDays
              : [];
            let newSelectDays = [];
            if (oldSelectDays.includes(day)) {
              newSelectDays = oldSelectDays.filter(
                selectedDay => selectedDay !== day,
              );
            } else {
              newSelectDays = [...oldSelectDays, day];
            }
            const oldTime = state.openHours[opemHourIndex]?.time;

            const newOpenHour = {
              id,
              selectDays: newSelectDays,
              time: oldTime,
            };
            if (opemHourIndex === -1) {
              draft.push(newOpenHour);
            } else {
              draft.splice(opemHourIndex, 1);
              draft.push(newOpenHour);
            }
          });
          return { openHours: nextState };
        });
      },
      setOpenHours: (id: string, time: string) => {
        set(state => {
          const nextState = produce(state.openHours, draft => {
            const opemHourIndex = draft.findIndex(
              openHours => id === openHours?.id,
            );
            const oldSelectDays = state.openHours[opemHourIndex]?.selectDays
              ? state.openHours[opemHourIndex].selectDays
              : [];

            const newOpenHour = {
              id,
              time,
              selectDays: oldSelectDays,
            };
            if (opemHourIndex === -1) {
              draft.push(newOpenHour);
            } else {
              draft.splice(opemHourIndex, 1);
              draft.push(newOpenHour);
            }
          });
          return { openHours: nextState };
        });
      },
      setRemoveOpenHours: (id: string) => {
        set(state => {
          const nextState = produce(state.openHours, draft => {
            const newOpenHours = state.openHours.filter(item => item.id !== id);
            return newOpenHours;
          });
          return { openHours: nextState };
        });
      },
      cashBackRules: [] as CashBackRules,
      resetCashBackRules: () => {
        set({ cashBackRules: [] as CashBackRules });
      },
      setCashBackDays: (id: string, day: string) => {
        set(state => {
          const nextState = produce(state.cashBackRules, draft => {
            const index = draft.findIndex(
              cashBackRules => id === cashBackRules?.id,
            );
            const oldSelectDays = state.cashBackRules[index]?.selectDays
              ? state.cashBackRules[index].selectDays
              : [];
            let newSelectDays = [];
            if (oldSelectDays.includes(day)) {
              newSelectDays = oldSelectDays.filter(
                selectedDay => selectedDay !== day,
              );
            } else {
              newSelectDays = [...oldSelectDays, day];
            }
            const rateCashBack = state.cashBackRules[index]?.rateCashBack;
            const rateCliente = state.cashBackRules[index]?.rateCliente;
            const rateAdm = state.cashBackRules[index]?.rateAdm;

            const newCashBackRule = {
              id,
              selectDays: newSelectDays,
              rateCashBack,
              rateCliente,
              rateAdm,
            };
            if (index === -1) {
              draft.push(newCashBackRule);
            } else {
              draft.splice(index, 1);
              draft.push(newCashBackRule);
            }
          });
          return { cashBackRules: nextState };
        });
      },
      setRateCashBack: (id: string, rateCashBack: string) => {
        set(state => {
          const nextState = produce(state.cashBackRules, draft => {
            const cashBackRulesIndex = draft.findIndex(
              cashBackRules => id === cashBackRules?.id,
            );
            const selectDays = state.cashBackRules[cashBackRulesIndex]
              ?.selectDays
              ? state.cashBackRules[cashBackRulesIndex].selectDays
              : [];

            const rateCliente =
              state.cashBackRules[cashBackRulesIndex]?.rateCliente;
            const rateAdm = state.cashBackRules[cashBackRulesIndex]?.rateAdm;

            const newCashBackRule = {
              id,
              selectDays,
              rateCashBack,
              rateCliente,
              rateAdm,
            };
            if (cashBackRulesIndex === -1) {
              draft.push(newCashBackRule);
            } else {
              draft.splice(cashBackRulesIndex, 1);
              draft.push(newCashBackRule);
            }
          });
          return { cashBackRules: nextState };
        });
      },
      setRateCliente: (id: string, rateCliente: string) => {
        set(state => {
          const nextState = produce(state.cashBackRules, draft => {
            const cashBackRulesIndex = draft.findIndex(
              cashBackRules => id === cashBackRules?.id,
            );
            const selectDays = state.cashBackRules[cashBackRulesIndex]
              ?.selectDays
              ? state.cashBackRules[cashBackRulesIndex].selectDays
              : [];
            const rateCashBack =
              state.cashBackRules[cashBackRulesIndex]?.rateCashBack;
            const rateAdm = state.cashBackRules[cashBackRulesIndex]?.rateAdm;

            const newCashBackRule = {
              id,
              selectDays,
              rateCashBack,
              rateCliente,
              rateAdm,
            };
            if (cashBackRulesIndex === -1) {
              draft.push(newCashBackRule);
            } else {
              draft.splice(cashBackRulesIndex, 1);
              draft.push(newCashBackRule);
            }
          });
          return { cashBackRules: nextState };
        });
      },
      setRateAdm: (id: string, rateAdm: string) => {
        set(state => {
          const nextState = produce(state.cashBackRules, draft => {
            const cashBackRulesIndex = draft.findIndex(
              cashBackRules => id === cashBackRules?.id,
            );
            const selectDays = state.cashBackRules[cashBackRulesIndex]
              ?.selectDays
              ? state.cashBackRules[cashBackRulesIndex].selectDays
              : [];
            const rateCliente =
              state.cashBackRules[cashBackRulesIndex]?.rateCliente;
            const rateCashBack =
              state.cashBackRules[cashBackRulesIndex]?.rateCashBack;

            const newCashBackRule = {
              id,
              selectDays,
              rateCashBack,
              rateCliente,
              rateAdm,
            };
            if (cashBackRulesIndex === -1) {
              draft.push(newCashBackRule);
            } else {
              draft.splice(cashBackRulesIndex, 1);
              draft.push(newCashBackRule);
            }
          });
          return { cashBackRules: nextState };
        });
      },
      setRemoveCashBackRules: (id: string) => {
        set(state => {
          const nextState = produce(state.cashBackRules, draft => {
            const newCashBackRule = state.cashBackRules.filter(
              item => item.id !== id,
            );
            return newCashBackRule;
          });
          return { cashBackRules: nextState };
        });
      },
      machinePos: [] as MachinePos,
      resetMachinePos: () => {
        set({ machinePos: [] as MachinePos });
      },
      setMachinePos: (id: string, serie: string) => {
        set(state => {
          const nextState = produce(state.machinePos, draft => {
            const index = draft.findIndex(machinePos => id === machinePos?.id);

            const newMachinePos = {
              id,
              serie,
            };
            if (index === -1) {
              draft.push(newMachinePos);
            } else {
              draft.splice(index, 1);
              draft.push(newMachinePos);
            }
          });
          return { machinePos: nextState };
        });
      },
      setRemoveMachinePos: (id: string) => {
        set(state => {
          const nextState = produce(state.machinePos, draft => {
            const newMachinePos = state.machinePos.filter(
              item => item.id !== id,
            );
            return newMachinePos;
          });
          return { machinePos: nextState };
        });
      },
      aboutEstablishment: '',
      setAbout: (text: string) => {
        set(() => ({ aboutEstablishment: text }));
      },
      currentStep: 0,
      nextStep: () =>
        set(state => ({
          currentStep: Math.min(7, state.currentStep + 1),
        })),
      previousStep: () =>
        set(state => ({ currentStep: state.currentStep - 1 })),
      resetCurrentStep: () => {
        set({ currentStep: 0 });
      },
      user: {} as PosUser,
      setUser: (user: PosUser) => {
        set(() => ({ user }));
      },
      fantasyName: '',
      setFantasyName: (name: string) => {
        set(() => ({ fantasyName: name }));
      },
      mainPhoneHasWhatsApp: false,
      setMainPhoneHasWhatsApp: (event: boolean) => {
        set(() => ({ mainPhoneHasWhatsApp: event }));
      },
      cellPhone: '',
      setCellPhone: (phone: string) => {
        set(() => ({ cellPhone: phone }));
      },
      cellPhoneHasWhatsApp: false,
      setCellPhoneHasWhatsApp: (event: boolean) => {
        set(() => ({ cellPhoneHasWhatsApp: event }));
      },
      whatsAppPhone: '',
      setWhatsAppPhone: (phone: string) => {
        set(() => ({ whatsAppPhone: phone }));
      },
      categoryId: '',
      setCategoryId: (category: string) => {
        set(() => ({ categoryId: category }));
      },
      categoryName: '',
      setCategoryName: (categoryName: string) => {
        set(() => ({ categoryName }));
      },
      coordinates: '',
      setCoordinates: (coordinates: string) => {
        set(() => ({ coordinates }));
      },
      logo: {} as Logo,
      setLogo: (url: string, file: File) => {
        set(() => ({ logo: { logoURL: url, logoFile: file } }));
      },
      banner: {} as Banner,
      setBanner: (url: string, file: File) => {
        set(() => ({ banner: { bannerURL: url, bannerFile: file } }));
      },
    }),

    {
      name: 'partnerStore',
    },
  ),
);
