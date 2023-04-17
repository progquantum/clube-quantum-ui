import { useRef } from 'react';
import { useQueryClient } from 'react-query';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { FiCalendar, FiCreditCard, FiUser, FiLock } from 'react-icons/fi';
import { RiBankCard2Line } from 'react-icons/ri';

import { useUpdateCreditCard } from 'hooks/useUpdateCreditCard';
import { QUERY_KEY_WALLET } from 'hooks/me/useWallet';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';
import { formatCVV } from 'utils/formatters/formatCVV';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Modal as ModalCreditCard } from 'components/Modal';

import { schema } from './schemas';
import { ModalCreditCardProps, ModalCreditCardFormProps } from './types';
import * as S from './styles';

export function Modal({ onRequestClose }: ModalCreditCardProps) {
  const { mutateAsync: postCreditCard, isLoading: loading } =
    useUpdateCreditCard();
  const queryClient = useQueryClient();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitCreditCard: SubmitHandler<
    ModalCreditCardFormProps
  > = async data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    })
      .then(() => {
        postCreditCard(
          {
            card_number: formatCreditCardRemoveSpace(data.card_number),
            card_name: data.card_name,
            expiration_date: data.expiration_date,
            card_brand: 'visa',
            cvc: data.cvc,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(QUERY_KEY_WALLET);
              onRequestClose();
            },
          },
        );
      })
      .catch(noop);
  };

  return (
    <ModalCreditCard onClose={onRequestClose}>
      <S.YourAccount>
        <RiBankCard2Line />
        <S.ContentTitle>Atualizar cartão</S.ContentTitle>
      </S.YourAccount>

      <S.CreditCardForm
        as={Form}
        ref={formRef}
        onSubmit={handleSubmitCreditCard}
      >
        <Input
          type="text"
          name="card_name"
          placeholder="Nome impresso no cartão"
          icon={FiUser}
        />

        <Input
          type="text"
          name="card_number"
          placeholder="Número do cartão"
          icon={FiCreditCard}
          onChange={e =>
            formRef.current.setFieldValue(
              'card_number',
              formatCreditCardAddSpace(e.target.value),
            )
          }
          inputMode="numeric"
        />

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
          inputMode="numeric"
        />

        <Input
          type="text"
          name="cvc"
          placeholder="CVV"
          icon={FiLock}
          onChange={e =>
            formRef.current.setFieldValue('cvc', formatCVV(e.target.value))
          }
          inputMode="numeric"
        />

        <Button type="submit" loading={loading} disabled={loading}>
          Confirmar
        </Button>
      </S.CreditCardForm>
    </ModalCreditCard>
  );
}
