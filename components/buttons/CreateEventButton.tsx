import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Theme from "../../components/theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0f3d32',
      },
      secondary: {
        main: '#f44336',
        contrastText: '#000',
      },
    },
  });

export default function FloatingActionButtonSize() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
    </ThemeProvider>
  );
}