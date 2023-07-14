import { GET, PUT } from 'data/api/lib';

import { TodoInterface } from './interface';

export namespace TodoService {
  export function getAll() {
    return GET<TodoInterface.GetAll>({ path: 'https://dummyjson.com/todos' });
  }

  export function updateTask({
    id,
    completed,
  }: {
    id: number;
    completed: boolean;
  }) {
    return PUT<TodoInterface.Task>({
      path: `https://dummyjson.com/todos/${id}`,
      body: { completed },
    });
  }
}
