import { useRouter } from 'next/router';

import { BANK_ACCOUNT_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function ManagePlansButton() {
  const router = useRouter();
  const handlCreatePlan = () => {
    router.push(BANK_ACCOUNT_PAGE);
  };

  return <S.ManageButton onClick={handlCreatePlan}>Continuar</S.ManageButton>;
}
