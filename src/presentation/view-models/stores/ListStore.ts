import { InterfacesTask } from 'domain/interfaces';
import { TaskUseCase } from 'domain/use-case';
import { createEffect, createEvent, createStore } from 'effector';

const taskUseCase = new TaskUseCase();

const getAllTasksFx = createEffect({
  handler: () => taskUseCase.getAllTasks(),
});

const updateTaskFx = createEffect({
  handler: ({ id, checked }: { id: number; checked: boolean }) =>
    taskUseCase.updateTask({ id, completed: checked }),
});

export const taskUseCaseStore = createStore<InterfacesTask[]>([]);

export const checkedTask = createEvent<{ id: number; checked: boolean }>();

taskUseCaseStore.on(getAllTasksFx.done, (state, { result }) => {
  return [...state, ...result];
});

taskUseCaseStore.on(checkedTask, (state, { id, checked }) => {
  return state.map(task => {
    if (id === task.id) {
      return { ...task, completed: checked };
    }

    return task;
  });
});

taskUseCaseStore.on(updateTaskFx.done, (state, { result }) => {
  return state.map(task => {
    if (result.id === task.id) {
      return { ...task, completed: result.completed };
    }

    return task;
  });
});

checkedTask.watch(({ id, checked }) => {
  updateTaskFx({ id, checked });
});

getAllTasksFx();
