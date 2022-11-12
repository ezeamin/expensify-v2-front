import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useTheme from 'hooks/useTheme';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles"

import Router from './routing/Router';

import { setTheme } from 'features/globalData/globalDataSlice';

import themes from 'constants/themes';

const App = () => {

  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    // Theme detection
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {      
      // dispatch(setTheme(themes.DARK));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
