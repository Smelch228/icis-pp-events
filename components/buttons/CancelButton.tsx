import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0f3d32',
      },
      secondary: {
        main: '#d33548',    
        contrastText: '	#FFFFFF',
      },
    },
  });
  

export default function FloatingActionButtonSize() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="medium" color="secondary" aria-label="filterlistIcon">
        <DoDisturbOutlinedIcon />
      </Fab>
    </Box>
    </ThemeProvider>
  );
}