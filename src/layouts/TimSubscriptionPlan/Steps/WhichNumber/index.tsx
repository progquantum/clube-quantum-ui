import { PlanSectionTitle } from 'components/PlanSectionTitle';

import { useTimPlanStore } from 'store/tim';

import { Default } from './Default';
import { PathOne } from './PathOne';
import { PathTwo } from './PathTwo';

import * as S from './styles';

export function WhichNumber() {
  const whichPath = useTimPlanStore(state => state.whichPath);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const hasPhoneNumber = phoneNumber.length > 0;

  return (
    <S.WhichNumberContainer>
      <PlanSectionTitle>
        {whichPath === 'default' &&
          'Antes de começarmos, precisamos saber mais'}
        {whichPath === 'pathOne' &&
          (!hasPhoneNumber
            ? 'Digite o seu número para a portabilidade'
            : 'Confirme seu número')}
        {whichPath === 'pathTwo' && 'Escolha um DDD e seu novo número'}
      </PlanSectionTitle>
      {whichPath === 'default' && <Default />}
      {whichPath === 'pathOne' && <PathOne />}
      {whichPath === 'pathTwo' && <PathTwo />}
    </S.WhichNumberContainer>
  );
}
