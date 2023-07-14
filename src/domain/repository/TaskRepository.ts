import { TodoInterface, TodoService } from 'data/api/services';

class TaskRepository {
  private apiService: typeof TodoService;

  constructor() {
    this.apiService = TodoService;
  }

  async getAllTasks(): Promise<TodoInterface.Task[]> {
    const tasksData = await this.apiService.getAll();

    return tasksData.data.todos;
  }
}

export default TaskRepository;
