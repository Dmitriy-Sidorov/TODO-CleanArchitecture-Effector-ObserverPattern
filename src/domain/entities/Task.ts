import { InterfacesTask } from 'domain/interfaces';

export class Task implements InterfacesTask {
  id: number;
  description: string;
  completed: boolean;

  constructor({ id, description, completed }: InterfacesTask) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }
}
