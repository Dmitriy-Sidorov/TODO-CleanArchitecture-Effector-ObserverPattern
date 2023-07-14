import { TodoInterface } from 'data/api/services';
import Task from 'domain/entities/Task';
import TaskRepository from 'domain/repository/TaskRepository';

export default class TaskUseCase {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.getAllTasks();

    return tasks.map((taskData: TodoInterface.Task) => {
      const { id, todo, completed } = taskData;

      return new Task({ id, description: todo, completed });
    });
  }
}
