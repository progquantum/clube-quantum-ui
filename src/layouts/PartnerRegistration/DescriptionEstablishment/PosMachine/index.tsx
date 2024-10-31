/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useTheme } from 'styled-components';

import { Input } from 'components/Input';

import { usePartnerStore } from 'store/partner-registration';

import { Props } from './types';
import * as S from './styles';

export function PosMachine({ id, handleRemovePosMachine }: Props) {
  const { colors } = useTheme();
  const state = usePartnerStore(state => state);

  const [serie, setSerie] = useState('');
  const [secretToken, setSecretToken] = useState('');

  const index =
    state.machinePos.findIndex(item => item.id === id) !== -1
      ? state.machinePos.findIndex(item => item.id === id)
      : Number(id);

  const inputDefaultValue = state.machinePos[index]?.serie;

  useEffect(() => {
    if (serie && secretToken) {
      state.setMachinePos(id, serie, secretToken);
    }
  }, [serie, secretToken, id, state]);

  return (
    <S.Container>
      {Number(id) !== 0 && (
        <AiOutlineClose
          style={{
            position: 'absolute',
            right: '0',
            top: '-10',
            cursor: 'pointer',
          }}
          color={colors.danger}
          size={22}
          onClick={() => handleRemovePosMachine(id)}
        />
      )}

      <Input
        type="text"
        name={`machinePos[${index}].pos_serial_number`}
        placeholder="Digite o número de série da sua POS"
        label="Número de série"
        onChange={e => setSerie(e.target.value)}
        defaultValue={inputDefaultValue || ''}
      />

      <Input
        type="text"
        name={`machinePos[${index}].secretToken`}
        placeholder="Digite o token de registro da sua POS"
        label="Token de Registro"
        onChange={e => setSecretToken(e.target.value)}
        defaultValue={inputDefaultValue || ''}
      />
    </S.Container>
  );
}
