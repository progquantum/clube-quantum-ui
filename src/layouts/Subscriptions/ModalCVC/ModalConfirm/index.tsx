import { MdAssignmentInd } from 'react-icons/md';
import { AxiosError } from 'axios';

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';
import { theme } from 'styles/theme';
import { formatPrice } from 'utils/formatters/formatPrice';
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { usePlanUpdate } from 'hooks/usePlanUpdate';
import { error } from 'helpers/notify/error';

import { ErrorResponse, ModalConfirmProps } from './types';
import * as S from './styles';

export function ModalConfirm({
  onError,
  onSucessful,
  onClose,
}: ModalConfirmProps) {
  const { mutateAsync: updatePlan, isLoading: isUpdating } = usePlanUpdate();

  const { plan, creditCard } = useSubscriptionsState();
  const handleUpdatePlan = () => {
    const { plan_id, plan_duration } = plan;
    const { cvc } = creditCard;
    updatePlan(
      {
        plan: {
          plan_id,
          plan_duration,
        },
        cvc,
      },
      {
        onSuccess: () => onSucessful(),
        onError: (err: AxiosError<ErrorResponse>) => {
          const isUserSubscribed =
            err.response?.data.statusCode === 409 &&
            err.response?.data.message ===
              'This user has already subscribed on this plan';

          const unexpectedError =
            err.response?.data.statusCode >= 400 &&
            err.response?.data.statusCode < 500 &&
            err.response?.data.message !==
              'This user has already subscribed on this plan';

          if (isUserSubscribed) {
            error('Este usuário já está inscrito neste plano');
          }
          if (unexpectedError) {
            onError();
          }
        },
      },
    );
  };

  const formattedPlanName = formatFirstLetterToUppercase(plan?.plan_name);
  const planDuration =
    // eslint-disable-next-line no-nested-ternary
    plan.plan_duration === 6
      ? 'Semestral'
      : plan.plan_duration === 1
      ? 'Mensal'
      : 'Anual';
  const formattedPrice = formatPrice(
    plan.price === '0' ? `0,${plan.price}` : plan.price,
  );

  return (
    <S.Container>
      <S.Plan>
        <S.Title>
          <MdAssignmentInd size={19.87} color={theme.colors.mediumslateBlue} />
          Seu plano escolhido
        </S.Title>
        <S.TitlePlan>{formattedPlanName}</S.TitlePlan>
        <S.CardDataContainer>
          <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
          <S.CardDataText>{planDuration}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Total</S.CardDataTitle>
          <S.CardDataText>{formattedPrice}</S.CardDataText>
        </S.CardDataContainer>
      </S.Plan>
      <S.ButtonConfirm
        onClick={handleUpdatePlan}
        loading={isUpdating}
        disabled={isUpdating}
      >
        Finalizar
      </S.ButtonConfirm>
      <S.ButtonConfirm variant="danger_outline" type="button" onClick={onClose}>
        Cancelar
      </S.ButtonConfirm>
    </S.Container>
  );
}
