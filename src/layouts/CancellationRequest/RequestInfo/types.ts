export type RequestInfo = {
  admin_report: string;
  cancelled_status: 'APPROVED' | 'DENIED' | 'PENDING' | string;
  contract: {
    date_of_acquisition: string;
    document_key: string;
    marketplace_subscription: {
      price_paid: string;
    };
    plan_name: string;
    user: {
      email: string;
      individual_person: {
        birth_date: string;
        name: string;
      };
      legal_person: {
        company_name: string;
      };
      phone: string;
    };
  };
  justification: string;
  id: string;
};

export type RequestInfoProps = {
  requestInfo: RequestInfo;
  removeSelectedRequest: () => void;
};
