import { Form } from '@unform/web';

import { useCallback, useRef } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';

import noop from 'lodash.noop';

import { success } from 'helpers/notify/success';
import { useSendPhoneCode } from 'hooks/useSendPhoneCode';
import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { useTimPlanStore } from 'store/tim';

import { Input } from 'components/Input';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import { performSchemaValidation } from 'utils/performSchemaValidation';

import { PhoneFormValues } from 'layouts/SignUp/Forms/Phone/types';

import { schema } from './schemas';

import { PinCode } from '../PinCode';
import * as S from '../styles';

export function PathOne() {
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const pinCode = useTimPlanStore(state => state.pinCode);
  const hasPhoneNumber = phoneNumber.length > 0;
  const setPath = useTimPlanStore(state => state.setPath);

  const { mutate: sendPhoneCodeRequest } = useSendPhoneCode();

  const formRef = useRef<FormHandles>(null);

  const handlePathOnePreviousStep = () => {
    const isInPartOne = !hasPhoneNumber;
    if (isInPartOne) {
      setPath('default');
    } else {
      setPhoneNumber('');
    }
  };

  const handlePhoneNumber: SubmitHandler<PhoneFormValues> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          const phoneNumber = data.phone.replace(/[^\d]+/g, '');
          const phone = '55'.concat(phoneNumber);
          sendPhoneCodeRequest(
            { phone },
            {
              onSuccess: (_, variables) => {
                setPhoneNumber(phoneNumber);
                success(`Codigo enviado para o numero ${variables.phone}`);
              },
            },
          );
        })
        .catch(noop);
    },
    [],
  );

  return (
    <>
      <S.CardContainer>
        <S.CardText>
          Para contratar seu novo plano, precisamos que nos diga, você quer
          trazer seu número de outra operadora ou escolher um número novo?
        </S.CardText>
        <S.RadioContainer>
          <div>
            <S.Radio type="radio" name="number" id="myNumber" defaultChecked />
            <S.RadioLabel htmlFor="myNumber">Trazer meu número</S.RadioLabel>
          </div>
          {phoneNumber ? (
            <PinCode />
          ) : (
            <Form
              ref={formRef}
              onSubmit={handlePhoneNumber}
              className="form"
              id="phone-number-form"
            >
              <Input
                type="text"
                inputMode="tel"
                name="phone"
                placeholder="DIGITE O SEU NÚMERO ATUAL COM DDD"
                label="Telefone"
                onChange={e =>
                  formRef.current.setFieldValue(
                    'phone',
                    formatPhoneNumber(e.target.value),
                  )
                }
              />
              <Input
                type="text"
                inputMode="tel"
                name="confirmPhone"
                label="Confirmar telefone"
                placeholder="CONFIRME O SEU NÚMERO ATUAL COM DDD"
                onChange={e =>
                  formRef.current.setFieldValue(
                    'confirmPhone',
                    formatPhoneNumber(e.target.value),
                  )
                }
              />
            </Form>
          )}
        </S.RadioContainer>
        <S.PlanName>{selectedPlan.name}</S.PlanName>
        <S.PlanPrice>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(selectedPlan.price))}
        </S.PlanPrice>
        <S.PriceSubtitle>Cobrança mensal no Cartão Banco UM</S.PriceSubtitle>
      </S.CardContainer>
      <S.ButtonContainer>
        <FlowButton
          variant={!hasPhoneNumber ? 'secondary' : 'primary_outline'}
          onClick={handlePathOnePreviousStep}
        >
          {!hasPhoneNumber ? 'Cancelar' : 'Voltar'}
        </FlowButton>
        <FlowButton
          variant="primary"
          form={pinCode ? 'pin-form' : 'phone-number-form'}
          type="submit"
        >
          Seguir
        </FlowButton>
      </S.ButtonContainer>
    </>
  );
}
