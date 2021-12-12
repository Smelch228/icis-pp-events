// Кнопка для визарда/аутентификации
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export type TFloatingActionButtonProps = {
    textValue?: string 
}

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

export default function FloatingActionButtons({textValue}: TFloatingActionButtonProps) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}>
      <Fab size = "large" variant="extended" color="primary">
        {textValue ?? "Вход"}
      </Fab>
    </Box>
    </ThemeProvider>  
  );
}