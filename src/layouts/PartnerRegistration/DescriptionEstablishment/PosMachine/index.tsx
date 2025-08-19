/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useTheme } from 'styled-components';

import { Input } from 'components/Input';

import { usePartnerStore } from 'store/partner-registration';

import * as S from './styles';
import { Props } from './types';

export function PosMachine({ id, handleRemovePosMachine }: Props) {
  const { colors } = useTheme();
  const state = usePartnerStore(state => state);

  const [serie, setSerie] = useState(state.machinePos[id]?.serie || '');
  const [secretToken] = useState(state.machinePos[id]?.secret_token || '');

  const index =
    state.machinePos.findIndex(item => item.id === id) !== -1
      ? state.machinePos.findIndex(item => item.id === id)
      : Number(id);

  const inputSerialNumberDefaultValue = state.machinePos[index]?.serie;

  useEffect(() => {
    if (serie && secretToken) {
      state.setMachinePos(id, serie, secretToken);
    }
  }, [serie, secretToken, id]);

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
        required
        label="Número de série"
        onChange={e => setSerie(e.target.value)}
        defaultValue={inputSerialNumberDefaultValue || ''}
      />
    </S.Container>
  );
}
