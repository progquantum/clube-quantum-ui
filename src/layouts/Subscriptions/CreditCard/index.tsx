import { useCallback, useRef } from 'react';
import { FiCalendar, FiCreditCard, FiLock } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { SideBar } from 'components/SideBar';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { VISAIcon } from 'components/Illustrations/Visa';
import { CreditCardIcon } from 'components/Illustrations/CreditCard';
import { Input } from 'components/Input';
import {
  BANK_ACCOUNT_PAGE,
  FINISHED_SUBSCRIPTION,
  SUBSCRIPTIONS_PAGE,
} from 'constants/routesPath';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';

import { formatCVV } from 'utils/formatters/formatCVV';

import { FormCreditCardData } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function CreditCardPage() {
  const router = useRouter();
  const { colors } = useTheme();
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
          router.push(FINISHED_SUBSCRIPTION);
        })
        .catch(noop);
    },
    [],
  );

  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <S.Form as={Form} ref={formRef} onSubmit={handleSubmitCreditCard}>
          <S.Line>
            <CreditCardIcon color={colors.gray[100]} width="22" height="16" />
            Seu cartão cadastrado
          </S.Line>
          <S.Text>
            Para poder tirar o máximo de proveito dos benefícios da plataforma,
            você precisa adicionar um cartão
          </S.Text>
          <S.DivInput>
            <Input
              type="text"
              name="card_name"
              placeholder="Nome impresso no cartão"
            />
          </S.DivInput>
          <S.ContentCardNumber>
            <S.DivInput>
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
              />
            </S.DivInput>
            <VISAIcon width="50" height="17.18" />
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
                  formRef.current.setFieldValue(
                    'cvc',
                    formatCVV(e.target.value),
                  )
                }
              />
            </S.CVC>
          </S.ContentCardExpirateCVC>
          <S.ConfirmButton variant="secondary_degrade" type="submit">
            Confirmar
          </S.ConfirmButton>
          <Link href={BANK_ACCOUNT_PAGE}>
            <S.ReturnButton variant="secondary">Voltar</S.ReturnButton>
          </Link>
          <Link href={SUBSCRIPTIONS_PAGE}>
            <S.Cancel>Cancelar</S.Cancel>
          </Link>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  );
}
