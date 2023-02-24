import { BiCheck } from 'react-icons/bi';

import { useTheme } from 'styled-components';

import { Button } from 'components/Button';
import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';
import EloIcon from 'components/Illustrations/Elo';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import { VISAIcon } from 'components/Illustrations/Visa';

import * as S from './styles';
import { Props } from './types';

export function PLan({ onNextStep }: Props) {
  const { colors } = useTheme();
  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Faça parte você também!</S.Title>
      </S.ContentTitle>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <S.Card>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <S.PlanType>Quantum </S.PlanType>
            <S.PlanTypeWeight> Smart</S.PlanTypeWeight>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <S.PlanPrice>R$ 44,90 </S.PlanPrice>
            <S.TypeCharge>/Mês</S.TypeCharge>
          </div>
          <S.Info>Cobrança mensal no Cartão Banco UM</S.Info>
          <S.P>Bandeiras aceitas</S.P>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            <VISAIcon width="75" height="24" />
            <MasterCardIcon width="39" height="24" />
            <EloIcon width="63" height="24" />
            <AmericanExpressIcon width="24" height="24" />
          </div>
          <div>
            <S.ContentBenefits>
              <BiCheck size={15} color={colors.mediumslateBlue} />
              <S.Benefits>
                Fidelize seus Clientes com o <strong>CLUBE QUANTUM</strong>
              </S.Benefits>
            </S.ContentBenefits>
            <S.ContentBenefits>
              <BiCheck size={15} color={colors.mediumslateBlue} />
              <S.Benefits>
                As <strong>melhores taxas</strong> do mercado
              </S.Benefits>
            </S.ContentBenefits>
            <S.ContentBenefits>
              <BiCheck size={15} color={colors.mediumslateBlue} />
              <S.Benefits>
                <strong>Dinheiro</strong> na mão <strong>em 1 dia útil</strong>
              </S.Benefits>
            </S.ContentBenefits>
            <S.ContentBenefits>
              <BiCheck size={15} color={colors.mediumslateBlue} />
              <S.Benefits>
                <strong>Conta digital Inclusa</strong> com Cartão VISA Débito
              </S.Benefits>
            </S.ContentBenefits>
            <S.ContentBenefits>
              <BiCheck size={15} color={colors.mediumslateBlue} />
              <S.Benefits>
                <strong>Link de pagamento</strong> para você vender online
              </S.Benefits>
            </S.ContentBenefits>
          </div>
        </S.Card>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '130px',
          gap: '12px',
          margin: '16px auto 0 auto',
        }}
      >
        <Button variant="primary" onClick={onNextStep}>
          Continuar
        </Button>
      </div>
    </S.Container>
  );
}
