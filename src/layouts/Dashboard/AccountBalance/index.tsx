import { BsCurrencyDollar } from 'react-icons/bs';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { AccountBalanceProps } from './types';

export function AccountBalance({
  title,
  description,
  value,
}: AccountBalanceProps) {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <BsCurrencyDollar color={colors.gray[300]} size={19} />
          <S.Title>{title}</S.Title>
        </S.ContentHeader>
      </S.Content>

      <S.TextValue>{value}</S.TextValue>
      <S.Subtitle>{description}</S.Subtitle>
    </S.Container>
  );
}
