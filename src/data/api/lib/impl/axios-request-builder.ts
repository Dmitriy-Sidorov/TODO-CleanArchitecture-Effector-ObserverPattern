import axios, { AxiosPromise } from 'axios';

import type { RestRequest } from '../types';

/** Конструктор запроса для axios. */
export function axiosRequestBuilder<DATA, PARAMS, BODY>(
  config: Omit<RestRequest<PARAMS, BODY>, 'path'>,
): AxiosPromise<DATA> {
  return axios({
    url: config.url,
    method: config.method,
    params: config.params,
    timeout: config.timeout,
    data: config.body,
    headers: config.headers,
    responseType: config.responseType,
  });
}
