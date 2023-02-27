import { PropsWithChildren } from 'react';
import { FaPortrait } from 'react-icons/fa';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function GenericCard({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  const { colors } = useTheme();
  return (
    <S.CardContainer>
      <div>
        <FaPortrait size={20} color={colors.mediumslateBlue} />
        {title}
      </div>
      {children}
    </S.CardContainer>
  );
}
