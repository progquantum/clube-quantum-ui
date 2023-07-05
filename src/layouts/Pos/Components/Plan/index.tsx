import { BiCheck } from 'react-icons/bi';

import { useTheme } from 'styled-components';

import { Button } from 'components/Button';
import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';
import EloIcon from 'components/Illustrations/Elo';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import { VISAIcon } from 'components/Illustrations/Visa';

import { formatPrice } from 'utils/formatters/formatPrice';

import * as S from './styles';
import { Props } from './types';

export function PLan({ onNextStep, smart }: Props) {
  const { colors } = useTheme();

  const wordsToBold = [
    ['CLUBE', 'QUANTUM'],
    ['melhores', 'taxas'],
    ['Dinheiro', 'em', '1', 'dia', 'útil'],
    ['Conta', 'digital', 'inclusa'],
    ['Link', 'de', 'pagamento'],
  ];

  function boldStrings(string: string, wordsToBold: string[]) {
    const words = string.split(' ');

    const formattedStrings = words.map((word: string) =>
      wordsToBold.includes(word) ? (
        <S.Bold key={word}> {word} </S.Bold>
      ) : (
        ` ${word} `
      ),
    );

    return (
      <S.Benefits>
        {formattedStrings.map(formattedString => formattedString)}
      </S.Benefits>
    );
  }

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Faça parte você também!</S.Title>
      </S.ContentTitle>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <S.Card>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <S.PlanType>{smart?.productList[0].name.split(' ')[0]} </S.PlanType>
            <S.PlanTypeWeight>
              {' '}
              {smart?.productList[0].name.split(' ')[1]}
            </S.PlanTypeWeight>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <S.PlanPrice>
              {formatPrice(smart?.productList[0].price)}
            </S.PlanPrice>
            <S.TypeCharge>/Mês</S.TypeCharge>
          </div>
          <S.Info> {smart?.productList[0].description}</S.Info>
          <S.P>Bandeiras aceitas</S.P>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            <VISAIcon width="75" height="24" />
            <MasterCardIcon width="39" height="24" />
            <EloIcon width="63" height="24" />
            <AmericanExpressIcon width="24" height="24" />
          </div>
          <div>
            {smart?.productList[0]?.details &&
              Object.keys(smart?.productList[0]?.details).map((key, index) => (
                <S.ContentBenefits key={key}>
                  <BiCheck size={15} color={colors.mediumslateBlue} />
                  {boldStrings(
                    smart?.productList[0].details[key],
                    wordsToBold[index],
                  )}
                </S.ContentBenefits>
              ))}
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
