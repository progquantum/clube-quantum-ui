import { useQuery } from 'react-query';

import { useTimPlanStore } from 'store/tim';
import {
  getTimNumbers,
  QUERY_KEY_GET_TIM_NUMBERS,
} from 'hooks/useTim/useTimNumbers';

import { ddds } from './listOfDDDs';
import * as S from '../styles';

export function PathTwo() {
  const selectedDDD = useTimPlanStore(state => state.selectedDDD);
  const setDDD = useTimPlanStore(state => state.setDDD);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);

  const { data: listOfPhoneNumbers, isLoading } = useQuery(
    [QUERY_KEY_GET_TIM_NUMBERS, selectedDDD],
    getTimNumbers,
    {
      enabled: !!selectedDDD,
    },
  );

  const handlePhoneNumber = async (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <>
      {!selectedDDD && (
        <div>
          <S.Radio type="radio" name="number" defaultChecked />
          <S.RadioLabel>Escolher um número novo</S.RadioLabel>
        </div>
      )}
      <div>
        <S.SelectLabel>DDD</S.SelectLabel>
        <S.Select
          onChange={e => setDDD(String(e.target.value))}
          defaultValue="placeholder"
        >
          <S.Option key="non-selectable" disabled hidden value="placeholder">
            Escolha uma opção
          </S.Option>
          {ddds.map(ddd => (
            <S.Option
              key={ddd.value}
              value={ddd.value ?? 'none'}
              disabled={!ddd.value}
            >
              {ddd.title}
            </S.Option>
          ))}
        </S.Select>
      </div>
      {selectedDDD && (
        <div>
          <S.SelectLabel>Escolha um número de telefone</S.SelectLabel>
          <S.Select
            value={phoneNumber && phoneNumber}
            onChange={e => handlePhoneNumber(String(e.target.value))}
            defaultValue="placeholder"
          >
            <S.Option selected disabled hidden value="placeholder">
              {isLoading ? 'Carregando...' : 'Escolha uma opção'}
            </S.Option>
            {!listOfPhoneNumbers || listOfPhoneNumbers.length === 0 ? (
              <S.Option>Nenhum número encontrado</S.Option>
            ) : (
              listOfPhoneNumbers.map(phone => (
                <S.Option key={phone.id} value={phone.phone}>
                  {phone.phone}
                </S.Option>
              ))
            )}
          </S.Select>
        </div>
      )}
    </>
  );
}
