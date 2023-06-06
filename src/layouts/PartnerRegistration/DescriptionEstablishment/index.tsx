/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useTheme } from 'styled-components';

import { Button } from 'components/Button';

import { TextArea } from 'components/TextArea';

import { usePartnerStore } from 'store/partner-registration';

import { performSchemaValidation } from 'utils/performSchemaValidation';

import { error } from 'helpers/notify/error';

import { useUpsertDescriptionCashback } from 'hooks/establishment/useUpsertDescriptionCashback';

import { OpeningHours } from './OpeningHours';
import { CashBackRules } from './CashBackRules';
import { List } from './types';
import { schema } from './schemas';
import { PosMachine } from './PosMachine';
import * as S from './styles';
import {
  convertCashBackRulesToRulesCashback,
  convertMachinePosToPosSerialNumbers,
  convertOpenHoursToHoursOpening,
} from './formatter';

export function DescriptionEstablishment() {
  const previousStep = usePartnerStore(state => state.previousStep);
  const nextStep = usePartnerStore(state => state.nextStep);
  // OPENINGHOURS**************************************************
  const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const openHours = usePartnerStore(state => state.openHours);
  const setAbout = usePartnerStore(state => state.setAbout);
  const aboutEstablishment = usePartnerStore(state => state.aboutEstablishment);
  const setRemoveOpenHours = usePartnerStore(state => state.setRemoveOpenHours);
  const user = usePartnerStore(state => state.user);
  const machinePos = usePartnerStore(state => state.machinePos);
  const allWeekdaysExist = weekdays.reduce(
    (acc, day) => acc && openHours.some(item => item.selectDays.includes(day)),
    true,
  );

  const [openingHoursList, setOpeningHoursList] = useState<List>([
    {
      id: '0',
      component: (
        <OpeningHours
          handleRemoveOpenHours={(id: string) => id}
          id="0"
          key="0"
        />
      ),
    },
  ]);

  const handleRemoveOpenHours = (id: string) => {
    setOpeningHoursList(prevList => {
      setRemoveOpenHours(id);
      const index = prevList.findIndex(item => item.id === id);
      if (index !== -1) {
        const newOpeningHoursList = prevList.filter(item => item.id !== id);
        return newOpeningHoursList;
      }

      return prevList;
    });
  };

  useEffect(() => {
    if (openHours.length > 0) {
      const newArray = openHours.map(item => ({
        ...item,
        component: (
          <OpeningHours
            handleRemoveOpenHours={handleRemoveOpenHours}
            id={item.id}
            key={item.id}
          />
        ),
      }));
      setOpeningHoursList(newArray);
    }
  }, []);

  const handleAddOpeningHours = () => {
    const id = uuidv4().toString();

    setOpeningHoursList(currentList => [
      ...currentList,
      {
        id,
        component: (
          <OpeningHours
            id={id}
            key={id}
            handleRemoveOpenHours={handleRemoveOpenHours}
          />
        ),
      },
    ]);
  };

  // CLOSE OPENINGHOURS**************************************************

  // CASHBACK************************************************************
  const cashBackRules = usePartnerStore(state => state.cashBackRules);
  const setRemoveCashBackRules = usePartnerStore(
    state => state.setRemoveCashBackRules,
  );
  const allWeekdaysExistOnCashBack = weekdays.reduce(
    (acc, day) =>
      acc && cashBackRules.some(item => item.selectDays.includes(day)),
    true,
  );
  const [cashBackList, setCashBackList] = useState<List>([
    {
      id: '0',
      component: (
        <CashBackRules
          handleRemoveCashBackRules={(id: string) => id}
          id="0"
          key="0"
        />
      ),
    },
  ]);

  const handleRemoveCashBackRules = (id: string) => {
    setCashBackList(prevList => {
      setRemoveCashBackRules(id);
      const index = prevList.findIndex(item => item.id === id);
      if (index !== -1) {
        const newCashBackList = prevList.filter(item => item.id !== id);
        return newCashBackList;
      }

      return prevList;
    });
  };

  useEffect(() => {
    if (cashBackRules.length > 0) {
      const newArray = cashBackRules.map(item => ({
        ...item,
        component: (
          <CashBackRules
            handleRemoveCashBackRules={handleRemoveCashBackRules}
            id={item.id}
            key={item.id}
          />
        ),
      }));
      setCashBackList(newArray);
    }
  }, []);

  const handleAddCashBackRules = () => {
    const id = uuidv4().toString();
    setCashBackList(currentList => [
      ...currentList,
      {
        id,
        component: (
          <CashBackRules
            id={id}
            key={id}
            handleRemoveCashBackRules={handleRemoveCashBackRules}
          />
        ),
      },
    ]);
  };
  // CLOSE CASHBACK******************************************************

  // MACHINE POS*********************************************************
  const state = usePartnerStore(state => state);

  const [machineList, setMachineList] = useState<List>([
    {
      id: '0',
      component: (
        <PosMachine
          handleRemovePosMachine={(id: string) => id}
          id="0"
          key="0"
        />
      ),
    },
  ]);

  const handleRemovePosMachine = (id: string) => {
    setMachineList(prevList => {
      state.setRemoveMachinePos(id);
      const index = prevList.findIndex(item => item.id === id);
      if (index !== -1) {
        const newMachineList = prevList.filter(item => item.id !== id);
        return newMachineList;
      }

      return prevList;
    });
  };

  useEffect(() => {
    if (state.machinePos.length > 0) {
      const newArray = state.machinePos.map(item => ({
        ...item,
        component: (
          <PosMachine
            handleRemovePosMachine={handleRemovePosMachine}
            id={item.id}
            key={item.id}
          />
        ),
      }));
      setMachineList(newArray);
    }
  }, []);

  const handleAddPosMachine = () => {
    const id = uuidv4().toString();
    setMachineList(currentList => [
      ...currentList,
      {
        id,
        component: (
          <PosMachine
            id={id}
            key={id}
            handleRemovePosMachine={handleRemovePosMachine}
          />
        ),
      },
    ]);
  };
  // CLOSE MACHINE POS******************************************************
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);
  function isEmpty(arr: any[]) {
    return arr.length === 0;
  }

  const [hasEmptySDOpenHours, setEmptySDOpenHours] = useState<boolean>(false);
  const [hasEmptySDCashBack, setEmptySDCashBack] = useState<boolean>(false);

  useEffect(() => {
    const hasEmptySelectDaysOH = openHours.some(schedule =>
      isEmpty(schedule.selectDays),
    );
    setEmptySDOpenHours(hasEmptySelectDaysOH);
  }, [openHours]);

  useEffect(() => {
    const hasEmptySelectDaysCB = cashBackRules.some(schedule =>
      isEmpty(schedule.selectDays),
    );
    setEmptySDCashBack(hasEmptySelectDaysCB);
  }, [cashBackRules]);

  const { mutate: upsertDescriptionCashback, isLoading: loading } =
    useUpsertDescriptionCashback();

  const { hoursOpening, closedDaysOfWeek } =
    convertOpenHoursToHoursOpening(openHours);
  const rules_cashback = convertCashBackRulesToRulesCashback(cashBackRules);
  const pos_serial_numbers = convertMachinePosToPosSerialNumbers(machinePos);

  const handleSubmit: SubmitHandler = useCallback(
    data =>
      performSchemaValidation({
        formRef,
        data,
        schema,
      }).then(() => {
        if (hasEmptySDOpenHours) {
          error('Selecione ao menos um dia para o horário de funcionamento!');
        }

        if (hasEmptySDCashBack) {
          error('Selecione ao menos um dia para a regra de cashback');
        }

        if (!hasEmptySDOpenHours && !hasEmptySDCashBack) {
          upsertDescriptionCashback(
            {
              user_id: user.id,
              about: aboutEstablishment,
              hours_opening: hoursOpening,
              closed_days_of_week: closedDaysOfWeek,
              pos_serial_numbers,
              rules_cashback,
            },
            {
              onSuccess: () => {
                nextStep();
              },
            },
          );
        }
      }),
    [
      hasEmptySDOpenHours,
      hasEmptySDCashBack,
      openHours,
      cashBackRules,
      machinePos,
      aboutEstablishment,
    ],
  );

  return (
    <S.Container>
      <S.Steps>
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>Informações do estabelecimento</S.StepTextDone>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>
            Descrição do estabelecimento e cashback
          </S.StepTextDone>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsCircle
            size={20.61}
            color={colors.darkslategray}
            fillOpacity={0.5}
          />
          <S.NextStepText>Resumo</S.NextStepText>
        </S.Step>
      </S.Steps>
      <S.HeadTitle>
        <S.Title>Sobre o estabelecimento</S.Title>
      </S.HeadTitle>
      <S.Form as={Form} ref={formRef} onSubmit={handleSubmit} className="form">
        {openingHoursList.map(item => item.component)}
        <Button
          variant="link"
          disabled={allWeekdaysExist}
          onClick={handleAddOpeningHours}
        >
          Adicionar horário alternativo
        </Button>

        <TextArea
          placeholder="Resumo sobre o estabelecimento"
          name="about"
          label="Sobre o estabelecimento"
          onChange={e => setAbout(e.target.value)}
          defaultValue={aboutEstablishment || ''}
        />
        <S.HeadTitle style={{ marginTop: '32px' }}>
          <S.Title>Regras para cashback</S.Title>
        </S.HeadTitle>
        {cashBackList.map(item => item.component)}
        <Button
          onClick={handleAddCashBackRules}
          disabled={allWeekdaysExistOnCashBack}
          variant="link"
        >
          Criar outra regra para cashback
        </Button>
        <S.HeadTitle style={{ marginTop: '26px' }}>
          <S.Title>Vincular máquina POS</S.Title>
        </S.HeadTitle>
        {machineList.map(item => item.component)}
        <Button onClick={handleAddPosMachine} variant="link">
          Vincular outra máquina
        </Button>
        <S.ContainerButton>
          <Button variant="secondary" onClick={previousStep}>
            Voltar
          </Button>
          <Button loading={loading} type="submit">
            Confirmar
          </Button>
        </S.ContainerButton>
      </S.Form>
    </S.Container>
  );
}
