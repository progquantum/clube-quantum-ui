import { SingUpButtonProps } from './types';

import * as S from './styles';

export function SingUpButton({ onUpdateFormStep }: SingUpButtonProps) {
  return <S.SingUpButton onClick={onUpdateFormStep}>Continuar</S.SingUpButton>;
}
