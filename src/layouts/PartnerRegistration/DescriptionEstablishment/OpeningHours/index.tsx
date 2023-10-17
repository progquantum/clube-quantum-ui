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
              disabled={AlreadySelect('SUNDAY')}
              onClick={() => setOpenDays(id, 'SUNDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('SUNDAY') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('SUNDAY') && 'white',
              }}
              variant="degrade"
            >
              Domingo
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('MONDAY')}
              onClick={() => setOpenDays(id, 'MONDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('MONDAY') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('MONDAY') && 'white',
              }}
              variant="degrade"
            >
              Segunda
            </S.StyledButton>
          </S.ContentDays>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('TUESDAY')}
              onClick={() => setOpenDays(id, 'TUESDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('TUESDAY') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('TUESDAY') && 'white',
              }}
              variant="degrade"
            >
              Terça
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('WEDNESDAY')}
              onClick={() => setOpenDays(id, 'WEDNESDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('WEDNESDAY') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('WEDNESDAY') &&
                  'white',
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
              disabled={AlreadySelect('THURSDAY')}
              onClick={() => setOpenDays(id, 'THURSDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('THURSDAY') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('THURSDAY') && 'white',
              }}
              variant="degrade"
            >
              Quinta
            </S.StyledButton>
            <S.StyledButton
              disabled={AlreadySelect('FRIDAY')}
              onClick={() => setOpenDays(id, 'FRIDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('FRIDAY') && '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('FRIDAY') && 'white',
              }}
              variant="degrade"
            >
              Sexta
            </S.StyledButton>
          </S.ContentDays>
          <S.ContentDays>
            <S.StyledButton
              disabled={AlreadySelect('SATURDAY')}
              onClick={() => setOpenDays(id, 'SATURDAY')}
              style={{
                height: '45px',
                marginTop: '0',
                backgroundColor:
                  openHours[index]?.selectDays?.includes('SATURDAY') &&
                  '#0C61FF',
                color:
                  openHours[index]?.selectDays?.includes('SATURDAY') && 'white',
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
