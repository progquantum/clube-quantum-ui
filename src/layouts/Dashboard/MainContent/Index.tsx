import Link from 'next/link';
import {
  RiCursorLine,
  RiGlobalLine,
  RiRefund2Line,
  RiShoppingBagLine,
  RiSmartphoneLine,
  RiStackLine,
} from 'react-icons/ri';
import { useState } from 'react';

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { useMe } from 'hooks/user/useMe';
import { useBalances } from 'hooks/useBalances';
import { useUnsubscribe } from 'hooks/useUnsubscribe';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { formatDate } from 'utils/formatters/formatDate';
import { generateDeadline } from 'utils/generateDeadline';
import { formatCashback } from 'utils/formatters/formatCashback';

import { InviteFriends } from 'components/InviteFriends';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';

import { success } from 'helpers/notify/success';

import { AccountBalance } from '../AccountBalance';
import * as S from './styles';

export function MainContent() {
  const [showModal, setShowModal] = useState(false);
  const { data } = useMe();

  const { mutateAsync: UnsubscribeRequest, isLoading } = useUnsubscribe();
  const { data: balances } = useBalances();

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  const formattedSubscriptionPrice = formatCashback(
    data?.subscription?.price_paid,
  );

  const feeOptions = {
    1: 'Mensal',
    6: 'Semestral',
    12: 'Anual',
  };

  const formattedMonthlyFee = feeOptions[data?.subscription?.monthly_fee];

  const expirationDate = `Sua assinatura será renovada em ${formatDate(
    data?.subscription.expires_in.toString(),
  )}`;

  const handleCancelPlan = () => {
    UnsubscribeRequest(null, {
      onSuccess: () => {
        handleRequestModal();
        success('Plano cancelado com sucesso! Verifique seu e-mail.');
      },
    });
  };

  return (
    <S.Container>
      <AccountBalance
        title="Saldo em conta"
        description={`Será transferido em ${generateDeadline(15)}`}
        value={formatCashback(balances?.awaiting_deposit)}
      />

      <AccountBalance
        title="Aguardando liberação"
        description={`Será transferido em ${generateDeadline(1)}`}
        value={formatCashback(balances?.accumulated_month)}
      />

      <S.DivMarketplace>
        <S.ComingSoon>Em breve</S.ComingSoon>
        <S.AccessMarket>
          <S.HeaderAccessMarket>
            <RiShoppingBagLine />
            <S.MarketText>Marketplace Quantum</S.MarketText>
          </S.HeaderAccessMarket>
          <S.ButtonMarketplace disabled>
            Acessar o marketplace
          </S.ButtonMarketplace>
        </S.AccessMarket>
        <S.ItemMarket>
          <RiGlobalLine />
          <S.MarketText>Sites parceiros</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiShoppingBagLine />
          <S.MarketText>Lojas próximas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiCursorLine />
          <S.MarketText>Serviços</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiRefund2Line />
          <S.MarketText>Ofertas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiSmartphoneLine />
          <S.MarketText>Eletrônicos</S.MarketText>
        </S.ItemMarket>
      </S.DivMarketplace>

      <S.DivSelectPlan>
        <S.HeaderSelectPlan>
          <RiStackLine />
          <S.TitlePlan>Seu Plano</S.TitlePlan>
        </S.HeaderSelectPlan>
        <S.DivStatusPlan>
          <S.TitleStatusPlan>
            {formatFirstLetterToUppercase(data?.subscription?.plan_name)}
          </S.TitleStatusPlan>
          <S.StatusPlan>
            {formattedMonthlyFee} - {formattedSubscriptionPrice}
          </S.StatusPlan>
        </S.DivStatusPlan>
        <Link href={SUBSCRIPTIONS_PAGE}>
          <S.ManageButton>Gerenciar planos</S.ManageButton>
        </Link>
        <S.Deadline>
          <S.TextDeadline>{expirationDate}</S.TextDeadline>
          <S.ButtonCancel onClick={handleRequestModal} variant="danger_outline">
            Cancelar
          </S.ButtonCancel>
        </S.Deadline>
      </S.DivSelectPlan>
      <InviteFriends />
      {showModal ? (
        <Modal onClose={handleRequestModal}>
          <S.TitleCancelPlan>
            Deseja realmente <br />
            cancelar seu plano?
          </S.TitleCancelPlan>
          <Button
            variant="danger"
            onClick={handleCancelPlan}
            loading={isLoading}
          >
            Cancelar plano
          </Button>
          <Button onClick={handleRequestModal}>Mudei de ideia</Button>
        </Modal>
      ) : null}
    </S.Container>
  );
}
