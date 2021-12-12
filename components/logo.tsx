import * as React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'


const theme = createTheme({
  palette: {
    primary: {
      main: '#0f3d32',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000',
    },
  },
})

export type TLogo = {
  textValue?: string
}

export default function Logo({textValue}: TLogo) {
  return (
    <ThemeProvider theme={theme}>
      <CheckCircleIcon sx={{ fontSize: 100 }} color="primary" />
      <Typography variant="h4" gutterBottom component="div">
        {textValue}
      </Typography>
    </ThemeProvider>
  )
}
