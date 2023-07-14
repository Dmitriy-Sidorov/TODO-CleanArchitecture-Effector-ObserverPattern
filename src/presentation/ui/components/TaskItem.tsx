import React from 'react';

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface TaskItemProps {
  id: number;
  description: string;
  completed: boolean;
}

export function TaskItem({ id, description, completed }: TaskItemProps) {
  const labelId = `checkbox-list-label-${id}`;

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments"></IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        // onClick={handleToggle(value)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={description} />
      </ListItemButton>
    </ListItem>
  );
}
