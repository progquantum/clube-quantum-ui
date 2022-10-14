import { baseInstance, queueInstance } from 'services/httpServices';

export const quantumClientQueue = queueInstance();

export const quantumClientBase = baseInstance();
