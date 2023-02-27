import { useTimPlanStore } from 'store/tim';

import { PinCode } from '../PinCode';
import * as S from '../styles';

export function PathOne() {
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);

  const handlePhoneNumber = async (phone: string) => {
    setPhoneNumber(phone);
  };

  return (
    <>
      <div>
        <S.Radio type="radio" name="number" id="myNumber" checked />
        <S.RadioLabel htmlFor="myNumber">Trazer meu número</S.RadioLabel>
      </div>

      {phoneNumber ? (
        <PinCode />
      ) : (
        <>
          <div>
            <S.SelectLabel>Telefone</S.SelectLabel>
            <S.Input
              name="phone"
              type="text"
              placeholder="Digite o seu número atual com DDD"
            />
          </div>
          <div>
            <S.SelectLabel>Confirmar Telefone</S.SelectLabel>
            <S.Input
              type="text"
              onBlur={e => handlePhoneNumber(String(e.target.value))}
              placeholder="Confirme o seu número atual com DDD"
            />
          </div>
        </>
      )}
    </>
  );
}
