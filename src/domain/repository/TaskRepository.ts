import { TodoService } from 'data/api/services';
import Task from 'domain/entities/Task';

class TaskRepository {
  private apiService: typeof TodoService;

  constructor() {
    this.apiService = TodoService;
  }

  async getAllTasks(): Promise<Task[]> {
    // Вызовите метод API для получения списка задач
    const tasksData = await this.apiService.getAll();

    // Преобразуйте данные из API в экземпляры класса Task
    const tasks = tasksData.data.map((taskData: any) => {
      const { id, title, description, completed } = taskData;
      return new Task(id, title, description, completed);
    });

    return tasks;
  }

  // Другие методы репозитория для создания, обновления и удаления задач
}

export default TaskRepository;
