import { SubscriptionButtonProps } from './types';

import * as S from './styles';

export function SubscriptionButton({
  onOpenModalCvcRequest,
}: SubscriptionButtonProps) {
  return (
    <S.SubscriptionButton onClick={onOpenModalCvcRequest}>
      Continuar
    </S.SubscriptionButton>
  );
}
