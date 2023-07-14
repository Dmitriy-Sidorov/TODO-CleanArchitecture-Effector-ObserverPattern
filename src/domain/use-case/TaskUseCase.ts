import { TodoInterface } from 'data/api/services';
import { Task } from 'domain/entities';
import { TaskRepository } from 'domain/repository';

export class TaskUseCase {
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

  async updateTask({
    id,
    completed,
  }: {
    id: number;
    completed: boolean;
  }): Promise<Task> {
    const taskData = await this.taskRepository.updateTask({ id, completed });

    return new Task({
      id: taskData.id,
      description: taskData.todo,
      completed: taskData.completed,
    });
  }
}
