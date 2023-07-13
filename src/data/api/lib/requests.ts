import { axiosRequestBuilder } from './impl/axios-request-builder';
import type { RestRequest } from './types';
import { RequestMethod } from './types';

/** Конфигуратор работы с axios. */
function fetchRequest<DATA, PARAMS, BODY>(config: RestRequest<PARAMS, BODY>) {
  const url = config.url ?? '';
  const timeout = config.timeout ?? 15000;

  return axiosRequestBuilder<DATA, PARAMS, BODY>({
    url: `${url}${config.path}`,
    body: config.body,
    method: config.method,
    params: config.params,
    responseType: config.responseType,
    timeout: timeout,
  });
}

type ExcludedTypes = 'method' | 'headers';

export function GET<DATA, T = unknown, R = unknown>(
  config: Omit<RestRequest<T, R>, ExcludedTypes | 'body'>,
) {
  return fetchRequest<DATA, T, R>({
    method: RequestMethod.GET,
    ...config,
  });
}

export function POST<DATA, T = unknown, R = unknown>(
  config: Omit<RestRequest<T, R>, ExcludedTypes>,
) {
  return fetchRequest<DATA, T, R>({
    method: RequestMethod.POST,
    ...config,
  });
}

export function PUT<DATA, T = unknown, R = unknown>(
  config: Omit<RestRequest<T, R>, ExcludedTypes>,
) {
  return fetchRequest<DATA, T, R>({
    method: RequestMethod.PUT,
    ...config,
  });
}

export function PATCH<DATA, T = unknown, R = unknown>(
  config: Omit<RestRequest<T, R>, ExcludedTypes>,
) {
  return fetchRequest<DATA, T, R>({
    method: RequestMethod.PATCH,
    ...config,
  });
}

export function DELETE<DATA, T = unknown, R = unknown>(
  config: Omit<RestRequest<T, R>, ExcludedTypes>,
) {
  return fetchRequest<DATA, T, R>({
    method: RequestMethod.DELETE,
    ...config,
  });
}
