import * as S from './styles';
import { ServiceCardProps } from './types';

export function ServiceCard({
  children,
  height,
  innerText,
  isDisabled,
  definedTheme,
}: ServiceCardProps) {
  return (
    <S.Container
      height={height}
      isDisabled={isDisabled}
      definedTheme={definedTheme}
    >
      {children}
      {innerText && <S.InnerText>{innerText}</S.InnerText>}
    </S.Container>
  );
}
