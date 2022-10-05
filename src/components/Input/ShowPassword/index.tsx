import { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { Input } from '..';
import { InputProps } from '../types';
import * as S from './styles';

export function ShowPasswordInput(props: InputProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { colors } = useTheme();

  const inputType = isPasswordHidden ? 'password' : 'text';

  const handleClick = () => {
    setIsPasswordHidden(prevState => !prevState);
  };

  const iconContextProviderValue = useMemo(
    () => ({
      color: colors.input.icon,
    }),
    [],
  );

  return (
    <S.Container>
      <Input {...props} type={inputType} />

      <S.HidePasswordButtonContainer>
        <button type="button" onClick={handleClick}>
          <IconContext.Provider value={iconContextProviderValue}>
            {isPasswordHidden ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </IconContext.Provider>
        </button>
      </S.HidePasswordButtonContainer>
    </S.Container>
  );
}
