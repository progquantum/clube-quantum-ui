import { useWallet } from 'hooks/useWallet';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { BankAccount } from './BankAccount';
import { CreditCard } from './CreditCard';
import * as S from './styles';

export function ManagePaymentPage() {
  const { data, isLoading } = useWallet();

  return (
    <>
      <title>Informações de pagamento - Clube Quantum</title>
      <DashboardLayout>
        <S.CardsContainer>
          <BankAccount user={data} loading={isLoading} />
          <CreditCard user={data} loading={isLoading} />
        </S.CardsContainer>
      </DashboardLayout>
    </>
  );
}
