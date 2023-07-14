export namespace TodoInterface {
  export interface Task {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }

  export interface GetAll {
    todos: Task[];
    total: number;
    skip: number;
    limit: number;
  }
}
