import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import produce, { enableMapSet } from 'immer';

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
      user: '',
      setUser: (user: string) => {
        set(() => ({ user }));
      },
      companyName: '',
      setCompanyName: (name: string) => {
        set(() => ({ companyName: name }));
      },
      phoneNumber1: '',
      setPhoneNumber1: (phone: string) => {
        set(() => ({ phoneNumber1: phone }));
      },
      phoneNumber1HasWhatsApp: false,
      setPhoneNumber1HasWhatsApp: (event: boolean) => {
        set(() => ({ phoneNumber1HasWhatsApp: event }));
      },
      phoneNumber2: '',
      setPhoneNumber2: (phone: string) => {
        set(() => ({ phoneNumber2: phone }));
      },
      phoneNumber2HasWhatsApp: false,
      setPhoneNumber2HasWhatsApp: (event: boolean) => {
        set(() => ({ phoneNumber2HasWhatsApp: event }));
      },
      phoneNumber3: '',
      setPhoneNumber3: (phone: string) => {
        set(() => ({ phoneNumber3: phone }));
      },
      categoryValue: '',
      setCategoryValue: (category: string) => {
        set(() => ({ categoryValue: category }));
      },
      linkGeolocalizacao: '',
      setLinkGeolocalizacao: (link: string) => {
        set(() => ({ linkGeolocalizacao: link }));
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
