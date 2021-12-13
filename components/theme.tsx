import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '0F3D32',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000',
    },
  },
});
export default createTheme;