import * as S from './styles';
import { ServiceCardProps } from './types';

export function ServiceCard({ children, height }: ServiceCardProps) {
  return <S.Container height={height}>{children}</S.Container>;
}
