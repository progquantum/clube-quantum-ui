import { useTimPlanStore } from 'store/tim';

import * as S from '../styles';

const ddds = [
  { value: '44', title: 'DDD 44' },
  { value: '21', title: 'DDD 21' },
  { value: '19', title: 'DDD 19' },
  { value: '11', title: 'DDD 11' },
  { value: '66', title: 'DDD 66' },
  { value: '65', title: 'DDD 65' },
];

const phones = [
  { value: '99887-8415', title: '99887-8415' },
  { value: '99920-1352', title: '99920-1352' },
  { value: '99569-5489', title: '99569-5489' },
  { value: '98700-2315', title: '98700-2315' },
  { value: '99689-0987', title: '99689-0987' },
  { value: '98759-3883', title: '98759-3883' },
];

export function PathTwo() {
  const selectedDDD = useTimPlanStore(state => state.selectedDDD);
  const setDDD = useTimPlanStore(state => state.setDDD);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);

  const handlePhoneNumber = async (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <>
      {!selectedDDD && (
        <div>
          <S.Radio type="radio" name="number" checked />
          <S.RadioLabel>Escolher um número novo</S.RadioLabel>
        </div>
      )}
      <div>
        <S.SelectLabel>DDD</S.SelectLabel>
        <S.Select
          onChange={e => setDDD(String(e.target.value))}
          value={selectedDDD && selectedDDD}
        >
          <S.Option selected disabled hidden value="none">
            Escolha uma opção
          </S.Option>
          {ddds.map(ddd => (
            <S.Option key={ddd.title} value={ddd.value}>
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
          >
            <S.Option selected disabled hidden value="none">
              Escolha uma opção
            </S.Option>

            {phones.map(phone => (
              <S.Option key={phone.title} value={phone.value}>
                {phone.title}
              </S.Option>
            ))}
          </S.Select>
        </div>
      )}
    </>
  );
}
