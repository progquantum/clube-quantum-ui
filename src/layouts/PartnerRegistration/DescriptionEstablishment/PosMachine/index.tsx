/* eslint-disable jsx-a11y/label-has-associated-control */
import { AiOutlineClose } from 'react-icons/ai';

import { useTheme } from 'styled-components';

import { Input } from 'components/Input';

import { usePartnerStore } from 'store/partner-registration';

import { Props } from './types';
import * as S from './styles';

export function PosMachine({ id, handleRemovePosMachine }: Props) {
  const { colors } = useTheme();
  const state = usePartnerStore(state => state);

  const index =
    state.machinePos.findIndex(item => item.id === id) !== -1
      ? state.machinePos.findIndex(item => item.id === id)
      : Number(id);

  const inputDefaultValue = state.machinePos[index]?.serie;

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
        name={`machinePos[${index}].machine_pos_serie`}
        placeholder="Digite o número de série da sua pos"
        label="Número de série"
        onChange={e => state.setMachinePos(id, e.target.value)}
        defaultValue={inputDefaultValue || ''}
      />
    </S.Container>
  );
}
