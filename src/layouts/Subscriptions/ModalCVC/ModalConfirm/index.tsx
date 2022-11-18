/* eslint-disable no-nested-ternary */
import { AxiosError } from 'axios';

import { RiStackLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext';
import { theme } from 'styles/theme';
import { formatPrice } from 'utils/formatters/formatPrice';
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';
import { usePlanUpdate } from 'hooks/usePlanUpdate';
import { error } from 'helpers/notify/error';

import { Modal } from 'components/Modal';

import { success } from 'helpers/notify/success';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import { Button } from 'components/Button';

import { ErrorResponse, ModalConfirmProps } from './types';
import * as S from './styles';

export function ModalConfirm({ onError, onClose }: ModalConfirmProps) {
  const { mutateAsync: updatePlan, isLoading: isUpdating } = usePlanUpdate();

  const router = useRouter();

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
        onSuccess: () => {
          success('Plano atualizado com sucesso!');
          router.push(DASHBOARD_PAGE);
        },
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
  const planPeriod = plan?.plan_period;
  const formattedPrice = formatPrice(
    plan?.price === '0' ? `0,${plan?.price}` : plan?.price,
  );

  return (
    <Modal onClose={onClose}>
      <S.Plan>
        <S.Title>
          <RiStackLine size={19.87} color={theme.colors.mediumslateBlue} />
          Seu plano escolhido
        </S.Title>
        <S.TitlePlan>{formattedPlanName}</S.TitlePlan>
        <S.CardDataContainer>
          <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
          <S.CardDataText>
            {planPeriod === 'monthly'
              ? 'Mensal'
              : planPeriod === 'semiannual'
              ? 'Semestral'
              : 'Anual'}
          </S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Total</S.CardDataTitle>
          <S.CardDataText>{formattedPrice}</S.CardDataText>
        </S.CardDataContainer>
      </S.Plan>
      <Button
        onClick={handleUpdatePlan}
        loading={isUpdating}
        disabled={isUpdating}
      >
        Finalizar
      </Button>
      <Button variant="danger_outline" onClick={onClose}>
        Cancelar
      </Button>
    </Modal>
  );
}
