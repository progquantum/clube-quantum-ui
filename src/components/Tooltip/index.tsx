import { TooltipProps } from './types';
import * as S from './styles';

export function Tooltip({ icon: Icon, title, classname }: TooltipProps) {
  return (
    <S.Container className={classname}>
      <S.Content>{title}</S.Content>
      <Icon />
    </S.Container>
  );
}
