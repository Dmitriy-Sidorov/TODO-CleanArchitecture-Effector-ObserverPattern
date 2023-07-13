import { PromiseStatus } from '../types';

export const isIdle = (status: PromiseStatus) => status === PromiseStatus.IDLE;
export const isPending = (status: PromiseStatus) =>
  status === PromiseStatus.PENDING;
export const isFulfilled = (status: PromiseStatus) =>
  status === PromiseStatus.FULFILLED;
export const isRejected = (status: PromiseStatus) =>
  status === PromiseStatus.REJECTED;
