import { useCallback, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { FiLock } from 'react-icons/fi';

import { RiBankCard2Line } from 'react-icons/ri';

import { useWallet } from 'hooks/useWallet';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';

import { formatCVV } from 'utils/formatters/formatCVV';

import { Modal } from 'components/Modal';

import { Button } from 'components/Button';

import { CVCFormValues, ModalCVCProps } from './types';
import { schema } from './schemas';
import * as S from './styles';
import { ModalConfirm } from './ModalConfirm';

export function ModalCVC({ onError, onClose, modalIsOpen }: ModalCVCProps) {
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);
  const { data } = useWallet();
  const expirationDate = data?.credit_card.expiration_date;
  const lastDigits = data?.credit_card.last_digits;
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);

  const { registerCreditCard } = useSubscriptionsDispatch();

  const handleRequestModal = () => {
    setModalConfirmIsOpen(prevState => !prevState);
  };

  const handleSubmitCVC: SubmitHandler<CVCFormValues> = useCallback(data => {
    performSchemaValidation({
      data,
      schema,
      formRef,
    })
      .then(() => {
        registerCreditCard({ cvc: data.cvc });
        handleRequestModal();
      })
      .catch(noop);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!modalConfirmIsOpen ? (
        modalIsOpen && (
          <Modal onClose={onClose}>
            <S.CVCform as={Form} ref={formRef} onSubmit={handleSubmitCVC}>
              <S.Title>
                <RiBankCard2Line size={18} color={colors.mediumslateBlue} />
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
              <Button type="submit">Continuar</Button>
            </S.CVCform>
          </Modal>
        )
      ) : (
        <ModalConfirm onError={onError} onClose={handleRequestModal} />
      )}
    </>
  );
}
