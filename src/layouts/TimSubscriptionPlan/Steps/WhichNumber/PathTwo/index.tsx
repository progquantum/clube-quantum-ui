import { useTimPlanStore } from 'store/tim';

import * as S from '../styles';

const ddds_SP = [
  { value: undefined, title: 'São Paulo' },
  { value: '11', title: 'DDD 11' },
  { value: '12', title: 'DDD 12' },
  { value: '13', title: 'DDD 13' },
  { value: '14', title: 'DDD 14' },
  { value: '15', title: 'DDD 15' },
  { value: '16', title: 'DDD 16' },
  { value: '17', title: 'DDD 17' },
  { value: '18', title: 'DDD 18' },
  { value: '19', title: 'DDD 19' },
];

const ddds_RJ = [
  { value: undefined, title: 'Rio de Janeiro' },
  { value: '21', title: 'DDD 21' },
  { value: '22', title: 'DDD 22' },
  { value: '24', title: 'DDD 24' },
];

const ddds_ES = [
  { value: undefined, title: 'Espirito Santo' },
  { value: '21', title: 'DDD 21' },
  { value: '22', title: 'DDD 22' },
  { value: '24', title: 'DDD 24' },
];

const ddds_MG = [
  { value: undefined, title: 'Minas Gerais' },
  { value: '31', title: 'DDD 31' },
  { value: '32', title: 'DDD 32' },
  { value: '33', title: 'DDD 33' },
  { value: '34', title: 'DDD 34' },
  { value: '35', title: 'DDD 35' },
  { value: '37', title: 'DDD 37' },
  { value: '38', title: 'DDD 38' },
];

const ddds = [...ddds_SP, ...ddds_RJ, ...ddds_ES, ...ddds_MG];
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
            <S.Option key={ddd.title} value={ddd.value ?? 'none'}>
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
