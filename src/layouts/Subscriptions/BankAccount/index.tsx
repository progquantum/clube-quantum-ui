import { useCallback, useRef } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { SideBar } from 'components/SideBar';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { BancoUm } from 'components/Illustrations/BancoUm';
import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { CREDIT_CARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';

import { schema } from './schemas';
import { FormAccountData } from './types';
import * as S from './styles';

export function BankAccountPage() {
  const router = useRouter();
  const { colors } = useTheme();
  const { registerBankAccount } = useSubscriptionsDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleBankAccountSubmit: SubmitHandler<FormAccountData> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          registerBankAccount({
            current_account: data.current_account.slice(0, -2),
            current_account_check_number: data.current_account.slice(-1),
            holder_name: data.holder_name,
          });
          router.push(CREDIT_CARD_PAGE);
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
        <S.Form as={Form} ref={formRef} onSubmit={handleBankAccountSubmit}>
          <S.Line>
            <BancoUm color={colors.gray[200]} width="10.32" height="15" />
            Sua Conta Banco Um
          </S.Line>
          <S.Text>
            Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova
            conta?
          </S.Text>
          <S.Content>
            <S.Title>Cod Banco</S.Title>
            <S.Title>Agência</S.Title>
          </S.Content>
          <S.Content>
            <S.Data>396 - Banco Um</S.Data>
            <S.Data>0001</S.Data>
          </S.Content>
          <S.DivInput>
            <Input
              type="text"
              name="current_account"
              placeholder="00000000-0"
              icon={AiOutlineBank}
              onChange={e =>
                formRef.current.setFieldValue(
                  'current_account',
                  formatBankAccount(e.target.value),
                )
              }
            />
          </S.DivInput>
          <S.DivInput>
            <Input
              type="text"
              name="holder_name"
              placeholder="Nome completo"
              icon={FiUser}
            />
          </S.DivInput>
          <S.Description>
            A conta a ser cadastrada deve ser a conta Banco Um na qual o CPF,
            informado anteriormente, está vinculado.
          </S.Description>

          <S.ConfirmButton variant="secondary_degrade" type="submit">
            Confirmar
          </S.ConfirmButton>

          <Link href={SUBSCRIPTIONS_PAGE}>
            <S.ReturnButton variant="secondary">Voltar</S.ReturnButton>
          </Link>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  );
}
