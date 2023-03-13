import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { useTimPlanStore } from 'store/tim';

import { FlowButton } from '../../Components/FlowButton';
import { Default } from './Default';
import { PathOne } from './PathOne';
import { PathTwo } from './PathTwo';

import * as S from './styles';

export function WhichNumber() {
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const hasDDD = !!useTimPlanStore(state => state.selectedDDD);
  const setDDD = useTimPlanStore(state => state.setDDD);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);
  const whichPath = useTimPlanStore(state => state.whichPath);
  const setPath = useTimPlanStore(state => state.setPath);
  const pinCode = useTimPlanStore(state => state.pinCode);
  const setPinCode = useTimPlanStore(state => state.setPinCode);
  const previousStep = useTimPlanStore(state => state.previousStep);
  const nextStep = useTimPlanStore(state => state.nextStep);

  const hasPhoneNumber = phoneNumber.length > 0;
  const hasPinCode = pinCode.length === 6;

  const handlePathOnePreviousStep = () => {
    const isInPartOne = !hasPhoneNumber;
    if (isInPartOne) {
      setPath('default');
    } else {
      setPhoneNumber('');
      setPinCode('');
    }
  };

  const handlePathTwoPreviousStep = () => {
    const isInPartOne = !hasDDD;

    if (isInPartOne) {
      setPath('default');
    } else {
      setDDD('');
    }
  };

  const handlePathOneNextStep = () => {
    setPinCode('');
    nextStep();
  };
  return (
    <>
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
        <S.CardContainer>
          <S.CardText>
            Para contratar seu novo plano, precisamos que nos diga, você quer
            trazer seu número de outra operadora ou escolher um número novo?
          </S.CardText>
          <S.RadioContainer>
            {whichPath === 'default' && <Default />}
            {whichPath === 'pathOne' && <PathOne />}
            {whichPath === 'pathTwo' && <PathTwo />}
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
      </S.WhichNumberContainer>
      {whichPath === 'default' && (
        <S.ButtonContainer>
          <FlowButton variant="secondary" onClick={previousStep}>
            Cancelar
          </FlowButton>
          <FlowButton variant="disabled" onClick={null}>
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      )}
      {whichPath === 'pathOne' && (
        <S.ButtonContainer>
          <FlowButton
            variant={!hasPhoneNumber ? 'secondary' : 'primary_outline'}
            onClick={handlePathOnePreviousStep}
          >
            {!hasPhoneNumber ? 'Cancelar' : 'Voltar'}
          </FlowButton>
          <FlowButton
            variant={!hasPinCode ? 'disabled' : 'primary'}
            onClick={!hasPhoneNumber ? null : handlePathOneNextStep}
          >
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      )}
      {whichPath === 'pathTwo' && (
        <S.ButtonContainer>
          <FlowButton
            variant={!hasDDD ? 'secondary' : 'primary_outline'}
            onClick={handlePathTwoPreviousStep}
          >
            {!hasPhoneNumber ? 'Cancelar' : 'Voltar'}
          </FlowButton>
          <FlowButton
            variant={!hasDDD && !hasPhoneNumber ? 'disabled' : 'primary'}
            onClick={!hasDDD ? null : nextStep}
          >
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      )}
    </>
  );
}
