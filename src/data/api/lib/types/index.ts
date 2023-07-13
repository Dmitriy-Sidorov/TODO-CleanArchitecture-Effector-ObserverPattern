/** Типы методов рест-запроса. */
export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/** Общий тип возможных параметров и тела запроса. */
type RestData<T> = Record<string | number, T>;

/** Общий тип для хедеров. */
export type RequestHeaders = Record<string, string | number | boolean>;

/**
 * Модель запроса Rest.
 *
 * @property {Method} method - Метод.
 * @property {string} path - Путь к запросу.
 * @property {string} [url] - Опрашиваемый URL.
 * @property {RestData} [params] - Query параметры.
 * @property {RestData} [body] - Тело.
 * @property {RequestHeaders} [headers] - Хедеры.
 * @property {number} [timeout] - Заданный таймаут запроса.
 * */
export interface RestRequest<PARAMS, BODY> {
  method: RequestMethod;
  path: string;
  url?: string;
  params?: RestData<PARAMS> | PARAMS;
  body?: RestData<BODY> | BODY;
  headers?: RequestHeaders;
  timeout?: number;
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';
  isCookieCheck?: boolean;
}

export enum PromiseStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}
