import { TodoInterface, TodoService } from 'data/api/services';

export class TaskRepository {
  private apiService: typeof TodoService;

  constructor() {
    this.apiService = TodoService;
  }

  async getAllTasks(): Promise<TodoInterface.Task[]> {
    const tasksData = await this.apiService.getAll();

    return tasksData.data.todos;
  }

  async updateTask({
    id,
    completed,
  }: {
    id: number;
    completed: boolean;
  }): Promise<TodoInterface.Task> {
    const taskData = await this.apiService.updateTask({ id, completed });

    return taskData.data;
  }
}
