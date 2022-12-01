import { quantumClientQueue, quantumClientBase } from 'config/client';
import { User, InviteCodePayload, ZipCode } from 'shared/types/apiSchema';

export async function getMe() {
  const { data } = await quantumClientQueue.get('/me');

  return data as User;
}

export async function checkInviteCode(code: string | string[]) {
  const { data } = await quantumClientBase.get(`/validate-invite/${code}`);

  return data as InviteCodePayload;
}

export async function getZipCode(zipCode: string) {
  const { data } = await quantumClientBase.get(`/zip-codes/${zipCode}`);

  return data as ZipCode;
}
