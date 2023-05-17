import { SingUpButtonProps } from './types';

import * as S from './styles';

export function SingUpButton({ onUpdateFormStep }: SingUpButtonProps) {
  return (
    <S.SingUpButton data-cy="next-step-button" onClick={onUpdateFormStep}>
      Continuar
    </S.SingUpButton>
  );
}
