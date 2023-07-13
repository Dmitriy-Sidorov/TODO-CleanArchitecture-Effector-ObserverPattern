import Task from 'domain/entities/Task';
import TaskRepository from 'domain/repository/TaskRepository';

class TaskUseCase {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getAllTasks(): Promise<Task[]> {
    // Получить список задач из репозитория
    const tasks = await this.taskRepository.getAllTasks();

    // Можно выполнить дополнительную обработку или логику над полученными задачами
    // Например, сортировка, фильтрация и т.д.

    return tasks;
  }

  // Другие методы use-case для создания, обновления и удаления задач
}

export default TaskUseCase;
