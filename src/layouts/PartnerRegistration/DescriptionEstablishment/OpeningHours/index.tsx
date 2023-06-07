/* eslint-disable jsx-a11y/label-has-associated-control */
import { AiOutlineClose } from 'react-icons/ai';

import { useTheme } from 'styled-components';

import { Input } from 'components/Input';

import { usePartnerStore } from 'store/partner-registration';

import { Props } from './types';
import * as S from './styles';

export function OpeningHours({ id, handleRemoveOpenHours }: Props) {
  const { colors } = useTheme();
  const openHours = usePartnerStore(state => state.openHours);
  const setOpenHours = usePartnerStore(state => state.setOpenHours);
  const setOpenDays = usePartnerStore(state => state.setOpenDays);

  const index =
    openHours.findIndex(item => item.id === id) !== -1
      ? openHours.findIndex(item => item.id === id)
      : Number(id);

  const AlreadySelect = (day: string) => {
    const AlredySet =
      openHours.some(item => item.selectDays.includes(day)) &&
      !openHours[index]?.selectDays.some(item => item.includes(day));

    return AlredySet;
  };

  const inputValueOpeningHours = openHours[index]?.time;

  return (
    <S.ContainerOpeningHours>
      {Number(id) !== 0 && (
        <AiOutlineClose
          style={{
            position: 'absolute',
            right: '0',
            top: '-28',
            cursor: 'pointer',
          }}
          color={colors.danger}
          size={22}
          onClick={() => handleRemoveOpenHours(id)}
        />
      )}

      <S.ContainerDays>
        <S.ContentRow>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('Domingo')}
              onClick={() => setOpenDays(id, 'Domingo')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Domingo') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Domingo') && 'white',
              }}
              variant="degrade"
            >
              Domingo
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Segunda')}
              onClick={() => setOpenDays(id, 'Segunda')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Segunda') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Segunda') && 'white',
              }}
              variant="degrade"
            >
              Segunda
            </S.StyledButton>
          </S.ContentDays>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('Terça')}
              onClick={() => setOpenDays(id, 'Terça')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Terça') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Terça') && 'white',
              }}
              variant="degrade"
            >
              Terça
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Quarta')}
              onClick={() => setOpenDays(id, 'Quarta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Quarta') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Quarta') && 'white',
              }}
              variant="degrade"
            >
              Quarta
            </S.StyledButton>
          </S.ContentDays>
        </S.ContentRow>
        <S.ContentRow>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('Quinta')}
              onClick={() => setOpenDays(id, 'Quinta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Quinta') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Quinta') && 'white',
              }}
              variant="degrade"
            >
              Quinta
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('Sexta')}
              onClick={() => setOpenDays(id, 'Sexta')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Sexta') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Sexta') && 'white',
              }}
              variant="degrade"
            >
              Sexta
            </S.StyledButton>
          </S.ContentDays>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('Sábado')}
              onClick={() => setOpenDays(id, 'Sábado')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('Sábado') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('Sábado') && 'white',
              }}
              variant="degrade"
            >
              Sábado
            </S.StyledButton>
          </S.ContentDays>
        </S.ContentRow>
      </S.ContainerDays>
      <S.ContainerInput>
        <Input
          type="text"
          name={`openingHours[${index}].opening_hours`}
          placeholder="EX: 08:00 ÀS 18:00"
          label="Horário de funcionamento"
          onChange={e => setOpenHours(id, e.target.value)}
          defaultValue={inputValueOpeningHours || ''}
        />
      </S.ContainerInput>
    </S.ContainerOpeningHours>
  );
}
