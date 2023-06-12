export type RequestInfo = {
  userName: string;
  contractName: string;
  contractDocumentKey: string;
  birthDate: string;
  email: string;
  productName: string;
  phoneNumber: string;
  areaCode: string;
  monthlyFee: number;
  acquisitionDate: string;
  cancellationJustification: string;
};

export type RequestInfoProps = {
  requestInfo: RequestInfo;
  removeSelectedRequest: () => void;
};
