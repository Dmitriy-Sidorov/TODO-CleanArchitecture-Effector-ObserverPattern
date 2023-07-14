import React from 'react';

import { List } from '@mui/material';

import { useStore } from 'effector-react';
import { TaskItem } from 'presentation/ui/components/TaskItem';
import { taskUseCaseStore } from 'presentation/view-models/stores';

export function TaskList() {
  const tasks = useStore(taskUseCaseStore);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map(({ id, description, completed }) => {
        return (
          <TaskItem id={id} completed={completed} description={description} />
        );
      })}
    </List>
  );
}
