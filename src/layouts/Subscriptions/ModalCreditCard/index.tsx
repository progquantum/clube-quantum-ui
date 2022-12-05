import { useCallback, useEffect, useRef, useState } from 'react';

import { FiCalendar, FiCreditCard, FiLock } from 'react-icons/fi';
import { RiBankCard2Line } from 'react-icons/ri';

import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { IoCard } from 'react-icons/io5';

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';

import { performSchemaValidation } from 'utils/performSchemaValidation';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCVV } from 'utils/formatters/formatCVV';

import { VISAIcon } from 'components/Illustrations/Visa';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import EloIcon from 'components/Illustrations/Elo';
import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';

import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';

import { schema } from './schemas';
import { FormCreditCardData, ModalProps } from './types';

import * as S from './styles';

export function ModalCreditCard({
  onRequestClose,
  onUpdateFormStep,
  onPreviousFormStep,
}: ModalProps) {
  const [CreditCardIcon, setCreditCardIcon] = useState(() => (
    <IoCard width="50" height="50" />
  ));
  const [firstDigitCardNumber, setFirstDigitCardNumber] = useState<string>();

  const { registerCreditCard } = useSubscriptionsDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitCreditCard: SubmitHandler<FormCreditCardData> = useCallback(
    data => {
      performSchemaValidation({
        data,
        schema,
        formRef,
      })
        .then(() => {
          registerCreditCard(data);
          onUpdateFormStep();
        })
        .catch(noop);
    },
    [],
  );

  useEffect(() => {
    switch (firstDigitCardNumber) {
      case '2':
      case '5':
        setCreditCardIcon(() => <MasterCardIcon width="50" height="50" />);
        break;
      case '4':
        setCreditCardIcon(() => <VISAIcon width="50" height="50" />);
        break;
      case '3':
        setCreditCardIcon(() => <AmericanExpressIcon width="50" height="50" />);
        break;
      case '6':
        setCreditCardIcon(() => <EloIcon width="50" height="50" />);
        break;
      default:
        setCreditCardIcon(() => <IoCard size="50" />);
    }
  }, [firstDigitCardNumber]);

  return (
    <Modal onClose={onRequestClose}>
      <S.Form as={Form} ref={formRef} onSubmit={handleSubmitCreditCard}>
        <S.Line>
          <RiBankCard2Line size={14} />
          Cartão
        </S.Line>

        <Input
          type="text"
          name="card_name"
          placeholder="Nome impresso no cartão"
        />

        <S.ContentCardNumber>
          <Input
            type="text"
            name="card_number"
            placeholder="Número do cartão"
            icon={FiCreditCard}
            onChange={e => {
              setFirstDigitCardNumber(e.target.value.slice(0, 1));

              formRef.current.setFieldValue(
                'card_number',
                formatCreditCardAddSpace(e.target.value),
              );
            }}
          />
          {CreditCardIcon}
        </S.ContentCardNumber>
        <S.ContentCardExpirateCVC>
          <S.DivInput>
            <Input
              type="text"
              name="expiration_date"
              placeholder="Data de vencimento"
              icon={FiCalendar}
              onChange={e =>
                formRef.current.setFieldValue(
                  'expiration_date',
                  formatCreditCardExpiration(e.target.value),
                )
              }
            />
          </S.DivInput>
          <S.CVC>
            <Input
              type="text"
              name="cvc"
              placeholder="CVV"
              icon={FiLock}
              onChange={e =>
                formRef.current.setFieldValue('cvc', formatCVV(e.target.value))
              }
            />
          </S.CVC>
        </S.ContentCardExpirateCVC>
        <Button type="submit">Confirmar</Button>

        <S.ReturnButton onClick={onPreviousFormStep} variant="danger_outline">
          Voltar
        </S.ReturnButton>
      </S.Form>
    </Modal>
  );
}
