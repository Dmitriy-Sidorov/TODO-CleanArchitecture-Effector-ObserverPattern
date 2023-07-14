import { InterfacesTask } from 'domain/interfaces';
import TaskUseCase from 'domain/use-case/TaskUseCase';
import { createEffect, createStore } from 'effector';

const taskUseCase = new TaskUseCase();

const getAllTasksFx = createEffect({
  handler: () => taskUseCase.getAllTasks(),
});

const taskUseCaseStore = createStore<InterfacesTask[]>([]).on(
  getAllTasksFx.done,
  (state, { result }) => {
    return [...state, ...result];
  },
);

getAllTasksFx();

export { getAllTasksFx, taskUseCaseStore };
