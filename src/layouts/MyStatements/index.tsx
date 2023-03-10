import { FaDollarSign } from 'react-icons/fa';
import { BsPersonBadge, BsCart2 } from 'react-icons/bs';

import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import * as S from './styles';

const partner = {
  partnerName: 'Amazon-Marketplace',
  earningDate: new Date(2022, 1, 17),
  quantityGained: 1.33,
};

const indication = {
  name: 'Comissão de Amanda Martins',
  earningDate: new Date(2022, 1, 17),
  quantityGained: 1,
};

const partners = [partner, partner, partner, partner];
const indications = [indication, indication, indication, indication];

export function MyStatementsPage() {
  const [whichFilterButton, setWhichFilterButton] = useState<
    'lastMonth' | 'lastWeek' | 'today'
  >('lastMonth');

  return (
    <DashboardLayout>
      <S.MyStatementsContainer>
        <S.MyStatementsHeader>
          Histórico de transações e cashback
        </S.MyStatementsHeader>
        <S.FilterContainer>
          <S.FilterButton isSelected={whichFilterButton === 'lastMonth'}>
            Último mês
          </S.FilterButton>
          <S.FilterButton isSelected={whichFilterButton === 'lastWeek'}>
            Última semana
          </S.FilterButton>
          <S.FilterButton isSelected={whichFilterButton === 'today'}>
            Hoje
          </S.FilterButton>
        </S.FilterContainer>
        <div>
          <S.AccountBalanceContainer>
            <S.TitleContainer>
              <FaDollarSign size={30} />
              <span>Saldo em conta</span>
            </S.TitleContainer>
            <S.AccountBalanceValue>R$ 1.200,00</S.AccountBalanceValue>
            <S.TransferDateText>
              Será transferido em 15/xx/xxxx
            </S.TransferDateText>
          </S.AccountBalanceContainer>
          <S.EarningsHistoryByPartner>
            <S.TitleContainer>
              <BsPersonBadge size={30} />
              <span>Seu histórico de Ganhos por Parceiro</span>
            </S.TitleContainer>
            <S.EarningsHistorySubtitle>
              Saldo de cashback de compras por parceiro
            </S.EarningsHistorySubtitle>
            <S.TotalEarningText>R$ 800,00</S.TotalEarningText>
            <S.PartnerContainer>
              {partners.map((partner: any) => (
                <S.PartnerRow>
                  <S.IconBox>
                    <BsCart2 size={20} />
                  </S.IconBox>
                  <div>
                    <S.PartnerName>{partner.partnerName}</S.PartnerName>
                    <S.EarningDate>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        partner.earningDate,
                      )}
                    </S.EarningDate>
                  </div>
                  <S.QuantityGainedText>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(partner.quantityGained)}
                  </S.QuantityGainedText>
                </S.PartnerRow>
              ))}
            </S.PartnerContainer>
            <S.PaginationContainer>
              <S.PaginationButton>Anterior</S.PaginationButton>
              <S.PaginationPages> 1 - 3 </S.PaginationPages>
              <S.PaginationButton>Próximo</S.PaginationButton>
            </S.PaginationContainer>
          </S.EarningsHistoryByPartner>
          <S.EarningsHistoryByIndication>
            <S.TitleContainer>
              <BsPersonBadge size={30} />
              <span>Seu histórico de Ganhos/Bônus por indicações</span>
            </S.TitleContainer>
            <S.EarningsHistorySubtitle>
              Saldo de Ganhos/Bonus por indicações
            </S.EarningsHistorySubtitle>
            <S.TotalEarningText>R$ 400,00</S.TotalEarningText>
            <S.PartnerContainer>
              {indications.map((indication: any) => (
                <S.PartnerRow>
                  <S.IconBox>
                    <BsCart2 size={20} />
                  </S.IconBox>
                  <div>
                    <S.PartnerName>{indication.name}</S.PartnerName>
                    <S.EarningDate>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        partner.earningDate,
                      )}
                    </S.EarningDate>
                  </div>
                  <S.QuantityGainedText>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(partner.quantityGained)}
                  </S.QuantityGainedText>
                </S.PartnerRow>
              ))}
            </S.PartnerContainer>
            <S.PaginationContainer>
              <S.PaginationButton>Anterior</S.PaginationButton>
              <S.PaginationPages> 1 - 3 </S.PaginationPages>
              <S.PaginationButton>Próximo</S.PaginationButton>
            </S.PaginationContainer>
          </S.EarningsHistoryByIndication>
        </div>
      </S.MyStatementsContainer>
    </DashboardLayout>
  );
}
