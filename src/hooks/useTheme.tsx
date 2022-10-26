import { useSelector } from 'react-redux';

import { createTheme } from '@mui/material/styles';

import themes from 'constants/themes';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import { stateType } from 'app/storeTypes';

const defaultBorderRadius = '1rem';

const useTheme = () => {
  const themeOption = useSelector((state: stateType) => state.globalData.theme);

  return createTheme({
    palette: {
      mode: themeOption,
      ...(themeOption === themes.LIGHT ? lightTheme : darkTheme),
    },
    typography: {
      allVariants: {
        fontFamily: 'Nunito, sans-serif',
      },
      body1: {
        fontSize: '1.1rem',
      },
      body2: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            [`& div`]: {
              borderRadius: defaultBorderRadius,
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
    },
  });
};

export default useTheme;
