import './App.css'
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme.ts';
import Home from './Home.tsx';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
            <Home/>
      </ThemeProvider>
  )
}

export default App
