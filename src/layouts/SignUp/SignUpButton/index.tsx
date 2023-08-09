import { SignUpButtonProps } from './types';

import * as S from './styles';

export function SignUpButton({ onUpdateFormStep }: SignUpButtonProps) {
  return (
    <S.SignUpButton data-cy="next-step-button" onClick={onUpdateFormStep}>
      Continuar
    </S.SignUpButton>
  );
}
