import React from 'react';

import { Box, Container } from '@mui/material';

import { TaskList } from 'presentation';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <TaskList />
      </Box>
    </Container>
  );
}
