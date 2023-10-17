import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { usePlans } from 'hooks/helpers/usePlans';

import { useMe } from 'hooks/me/useMe';

import { Plans } from '.';
import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { mockUser } from '../../../__test__/__mocks__/mockedData/user';

jest.mock('hooks/helpers/usePlans');
jest.mock('hooks/me/useMe');
describe('Plans', () => {
  beforeAll(async () => await login());
  beforeEach(() => {
    const plans = [
      {
        id: '512592bc-e614-4da2-bbaf-b455ef09f7fa',
        name: 'QUANTUM GRATUITO',
        cashback_above_own_individual_person: '0.1',
        amount_by_effective_direct_indication: '5',
        max_amount_of_effective_indirect_indication: 0,
        amount_of_money_per_indirect_referral_with_paid_plan: '0',
        can_participate_on_fidelity_program_quantum: false,
        value_of_renew_of_paid_plan_on_13_month: '0',
        amount_of_money_per_direct_referral_with_paid_plan: '0',
        percentual_of_commission_above_direct_indication: '0',
        has_a_commission_for_each_product_purchased_by_direct_referral: false,
        amount_commission_for_each_product_purchased_direct_indication: '0',
        amount_commission_for_each_pos_licensed_and_active: '0',
        has_monthly_fee: false,
        minimal_amount_of_transaction_on_last_month: '0',
        minimal_amount_of_products_bought_on_last_month: 0,
        monthly_price: '0',
        semiannual_price: '0',
        annual_price: '0',
        renovation_price: '0',
        promotional_price: '0',
      },
      {
        id: 'b7cb3fad-44a9-48cd-9e7a-be485ed06fe7',
        name: 'QUANTUM START',
        cashback_above_own_individual_person: '0.2',
        amount_by_effective_direct_indication: '5',
        max_amount_of_effective_indirect_indication: 250,
        amount_of_money_per_indirect_referral_with_paid_plan: '1.2',
        can_participate_on_fidelity_program_quantum: true,
        value_of_renew_of_paid_plan_on_13_month: '199.9',
        amount_of_money_per_direct_referral_with_paid_plan: '1',
        percentual_of_commission_above_direct_indication: '1',
        has_a_commission_for_each_product_purchased_by_direct_referral: true,
        amount_commission_for_each_product_purchased_direct_indication: '1',
        amount_commission_for_each_pos_licensed_and_active: '0',
        has_monthly_fee: true,
        minimal_amount_of_transaction_on_last_month: '500',
        minimal_amount_of_products_bought_on_last_month: 0,
        monthly_price: '19.9',
        semiannual_price: '109.9',
        annual_price: '199.9',
        renovation_price: '199.9',
        promotional_price: '0',
      },
      {
        id: 'f6e996fc-56c5-45f1-ae47-454bb99e724a',
        name: 'QUANTUM SELECT',
        cashback_above_own_individual_person: '0.2',
        amount_by_effective_direct_indication: '5',
        max_amount_of_effective_indirect_indication: 500,
        amount_of_money_per_indirect_referral_with_paid_plan: '1.2',
        can_participate_on_fidelity_program_quantum: true,
        value_of_renew_of_paid_plan_on_13_month: '499.9',
        amount_of_money_per_direct_referral_with_paid_plan: '1',
        percentual_of_commission_above_direct_indication: '2',
        has_a_commission_for_each_product_purchased_by_direct_referral: true,
        amount_commission_for_each_product_purchased_direct_indication: '1',
        amount_commission_for_each_pos_licensed_and_active: '10',
        has_monthly_fee: true,
        minimal_amount_of_transaction_on_last_month: '2000',
        minimal_amount_of_products_bought_on_last_month: 1,
        monthly_price: '49.9',
        semiannual_price: '269.9',
        annual_price: '499.9',
        renovation_price: '499.9',
        promotional_price: '0',
      },
    ];

    (usePlans as jest.Mock).mockReturnValue({
      data: plans,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });

    (useMe as jest.Mock).mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render correctly', async () => {
    const { getByText } = render(
      <ProviderMock>
        <Plans />
      </ProviderMock>,
    );

    await waitFor(() => {
      const title = getByText(/selecione o período de pagamento/i);
      const monthly = getByText(/mensal/i);
      const semiannual = getByText(/semestral/i);
      const yearly = getByText(/anual/i);
      const freePlanTitle = getByText(/quantum gratuito/i);
      const freePlanText = getByText(
        /benefícios quantum e cashback sem pagar nada/i,
      );
      const startPlanTitle = getByText(/start/i);
      const selectPlanTitle = getByText(/select/i);

      expect(title).toBeInTheDocument();
      expect(monthly).toBeInTheDocument();
      expect(semiannual).toBeInTheDocument();
      expect(yearly).toBeInTheDocument();
      expect(freePlanTitle).toBeInTheDocument();
      expect(freePlanText).toBeInTheDocument();
      expect(startPlanTitle).toBeInTheDocument();
      expect(selectPlanTitle).toBeInTheDocument();
    });
  });

  it('should select a plan and a period', async () => {
    render(
      <ProviderMock>
        <Plans />
      </ProviderMock>,
    );

    await waitFor(() => {
      const monthly = screen.getByText(/mensal/i);
      const semePlanTitle = screen.getByText(/semestral/i);

      expect(semePlanTitle).toHaveStyle({ backgroundColor: '#ffffff' });

      fireEvent.click(monthly);
      expect(monthly).toHaveStyle({ backgroundColor: '#ffffff' });

      fireEvent.click(semePlanTitle);
      expect(semePlanTitle).toHaveStyle({ backgroundColor: '#ffffff' });
    });
  });
});
