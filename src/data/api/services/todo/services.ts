import { GET } from 'data/api/lib';

export namespace TodoService {
  export function getAll() {
    return GET<[]>({ path: 'https://dummyjson.com/todos' });
  }
}
