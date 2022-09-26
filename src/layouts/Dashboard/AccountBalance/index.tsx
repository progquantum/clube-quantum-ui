import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import { AccountBalanceProps } from './types';
import * as S from './styles';

export function AccountBalance({
  title,
  description,
  value,
}: AccountBalanceProps) {
  const [isHiddenAccountBalance, setIsHiddenAccountBalance] = useState(true);
  const { colors } = useTheme();

  const handleClick = () => {
    setIsHiddenAccountBalance(prevState => !prevState);
  };

  const IconContainerValue = useMemo(
    () => ({
      color: colors.gray[300],
      size: '22px',
    }),
    [],
  );

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <BsCurrencyDollar color={colors.gray[300]} size={19} />
          <S.Title>{title}</S.Title>
        </S.ContentHeader>

        <S.AccountBalanceButton type="button" onClick={handleClick}>
          <IconContext.Provider value={IconContainerValue}>
            {isHiddenAccountBalance ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </IconContext.Provider>
        </S.AccountBalanceButton>
      </S.Content>

      <S.TextValue>
        {isHiddenAccountBalance ? '.....' : `R$ ${value}`}
      </S.TextValue>
      <S.Subtitle>{description}</S.Subtitle>
    </S.Container>
  );
}
