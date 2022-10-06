import { useCallback, useRef, useState } from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { FiLock } from 'react-icons/fi';

import { useWallet } from 'hooks/useWallet';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';

import { formatCVV } from 'utils/formatters/formatCVV';

import { ModalConfirm } from './ModalConfirm';
import { CVCFormValues, ModalCVCProps } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function ModalCVC({ onSucessful, onError, onClose }: ModalCVCProps) {
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);
  const { data } = useWallet();
  const expirationDate = data?.credit_card.expiration_date;
  const lastDigits = data?.credit_card.last_digits;
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);

  const { registerCreditCard } = useSubscriptionsDispatch();

  function openModal() {
    setModalConfirmIsOpen(true);
  }
  const handleSubmitCVC: SubmitHandler<CVCFormValues> = useCallback(data => {
    performSchemaValidation({
      data,
      schema,
      formRef,
    })
      .then(() => {
        registerCreditCard({ cvc: data.cvc });
        openModal();
      })
      .catch(noop);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!modalConfirmIsOpen ? (
        <S.CVCform as={Form} ref={formRef} onSubmit={handleSubmitCVC}>
          <S.Title>
            <BsCreditCardFill size={22} color={colors.mediumslateBlue} />
            Confirmar CVV
          </S.Title>
          <S.Text>
            Para poder alterar seu plano, você precisa
            <strong> confirmar o código de segurança do cartão.</strong>
          </S.Text>
          <S.CardDataContainer>
            <S.CardDataTitle> Cartão</S.CardDataTitle>
            <S.CardData>**** **** **** {lastDigits}</S.CardData>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Confirmar CVV</S.CardDataTitle>
            <S.DivInput>
              <Input
                type="text"
                name="cvc"
                placeholder="CVV"
                icon={FiLock}
                onChange={e =>
                  formRef.current.setFieldValue(
                    'cvc',
                    formatCVV(e.target.value),
                  )
                }
              />
            </S.DivInput>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Validade</S.CardDataTitle>
            <S.CardData>{expirationDate}</S.CardData>
          </S.CardDataContainer>
          <S.ButtonCVC type="submit">Continuar</S.ButtonCVC>
          <S.ButtonCVC variant="danger_outline" type="button" onClick={onClose}>
            Cancelar
          </S.ButtonCVC>
        </S.CVCform>
      ) : (
        <ModalConfirm
          onError={onError}
          onSucessful={onSucessful}
          onClose={onClose}
        />
      )}
    </>
  );
}
