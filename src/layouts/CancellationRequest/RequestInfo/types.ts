export type RequestInfo = {
  contractName: string;
  contractDocumentKey: string;
  contractType: string;
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
};
