class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;

  constructor(
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  // Другие методы и логика, связанные с задачами
}

export default Task;
