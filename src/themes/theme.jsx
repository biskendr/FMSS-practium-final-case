import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      secondary: '#fff',
    },
    secondary: {
      main: '#FADE4B',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    background: {
      default: '#000',
      secondary: '#FADE4B',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
