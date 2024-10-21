import './App.css'
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from "@mui/material/styles";
import theme from './theme.tsx';
import Home from './Home.tsx';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
            <Home/>
      </ThemeProvider>
  )
}
