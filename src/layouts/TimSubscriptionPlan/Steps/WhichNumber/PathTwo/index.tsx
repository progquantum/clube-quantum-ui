import { useQuery } from 'react-query';

import { useTimPlanStore } from 'store/tim';
import {
  getTimNumbers,
  QUERY_KEY_GET_TIM_NUMBERS,
} from 'hooks/tim/useTimNumbers';

import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';

import { ddds } from './listOfDDDs';
import * as S from '../styles';

export function PathTwo() {
  const selectedDDD = useTimPlanStore(state => state.selectedDDD);
  const setDDD = useTimPlanStore(state => state.setDDD);
  const setPhoneNumber = useTimPlanStore(state => state.setPhoneNumber);
  const setIsPortability = useTimPlanStore(state => state.setIsPortability);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const setPath = useTimPlanStore(state => state.setPath);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const hasPhoneNumber = phoneNumber.length > 0;
  const hasDDD = !!selectedDDD;
  const nextStep = useTimPlanStore(state => state.nextStep);

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

  const handlePathTwoPreviousStep = () => {
    setPath('default');
    setDDD('');
    setPhoneNumber('');
  };

  const handleNextStep = () => {
    setIsPortability(true);
    nextStep();
  };

  return (
    <>
      {' '}
      <S.CardContainer>
        <S.CardText>
          Para contratar seu novo plano, precisamos que nos diga, você quer
          trazer seu número de outra operadora ou escolher um número novo?
        </S.CardText>
        <S.RadioContainer>
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
              <S.Option
                key="non-selectable"
                disabled
                hidden
                value="placeholder"
              >
                Escolha uma opção
              </S.Option>
              {ddds.map(ddd => (
                <S.Option
                  key={ddd.title}
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
                onChange={e => handlePhoneNumber(String(e.target.value))}
                defaultValue="placeholder"
              >
                <S.Option disabled hidden value="placeholder">
                  {isLoading ? 'Carregando...' : 'Escolha uma opção'}
                </S.Option>
                {!listOfPhoneNumbers || listOfPhoneNumbers.length === 0 ? (
                  <S.Option key="no-option-number">
                    Nenhum número encontrado
                  </S.Option>
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
        <FlowButton
          variant={!hasDDD ? 'secondary' : 'primary_outline'}
          onClick={handlePathTwoPreviousStep}
        >
          {!hasPhoneNumber && !hasDDD ? 'Cancelar' : 'Voltar'}
        </FlowButton>
        <FlowButton
          variant={!hasPhoneNumber ? 'disabled' : 'primary'}
          onClick={!hasDDD ? null : handleNextStep}
        >
          Seguir
        </FlowButton>
      </S.ButtonContainer>
    </>
  );
}
