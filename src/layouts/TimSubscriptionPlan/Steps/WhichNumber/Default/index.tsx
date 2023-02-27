import { useTimPlanStore } from 'store/tim';

import * as S from '../styles';

export function Default() {
  const setPath = useTimPlanStore(state => state.setPath);
  return (
    <>
      <div>
        <S.Radio
          type="radio"
          name="number"
          id="myNumber"
          onClick={() => setPath('pathOne')}
        />
        <S.RadioLabel htmlFor="myNumber">Trazer meu número</S.RadioLabel>
      </div>
      <div>
        <S.Radio
          type="radio"
          name="number"
          id="newNumber"
          onClick={() => setPath('pathTwo')}
        />
        <S.RadioLabel htmlFor="newNumber">Escolher um número novo</S.RadioLabel>
      </div>
    </>
  );
}
