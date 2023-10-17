import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { useTimPlanStore } from 'store/tim';

import * as S from '../styles';

export function Default() {
  const setPath = useTimPlanStore(state => state.setPath);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const previousStep = useTimPlanStore(state => state.previousStep);
  return (
    <>
      <S.CardContainer>
        <S.CardText>
          Para contratar seu novo plano, precisamos que nos diga, você quer
          trazer seu número de outra operadora ou escolher um número novo?
        </S.CardText>
        <S.RadioContainer>
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
            <S.RadioLabel htmlFor="newNumber">
              Escolher um número novo
            </S.RadioLabel>
          </div>
        </S.RadioContainer>
        <S.PlanName>{selectedPlan.name}</S.PlanName>
        <S.PlanPrice>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(selectedPlan.price))}
        </S.PlanPrice>
        <S.PriceSubtitle>Cobrança mensal no Cartão Banco UM</S.PriceSubtitle>
      </S.CardContainer>
      <S.ButtonContainer>
        <FlowButton variant="secondary" onClick={previousStep}>
          Cancelar
        </FlowButton>
        <FlowButton variant="disabled" onClick={null}>
          Seguir
        </FlowButton>
      </S.ButtonContainer>
    </>
  );
}
