import { GET } from 'data/api/lib';

import { TodoInterface } from './interface';

export namespace TodoService {
  export function getAll() {
    return GET<TodoInterface.GetAll>({ path: 'https://dummyjson.com/todos' });
  }
}
