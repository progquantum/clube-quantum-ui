import { quantumClientBase } from 'config/client';
import { InviteCodePayload, ZipCode } from 'shared/types/apiSchema';

export async function checkInviteCode(code: string | string[]) {
  const { data } = await quantumClientBase.get(`/validate-invite/${code}`);

  return data as InviteCodePayload;
}

export async function getZipCode(zipCode: string) {
  const { data } = await quantumClientBase.get(`/zip-codes/${zipCode}`);

  return data as ZipCode;
}
