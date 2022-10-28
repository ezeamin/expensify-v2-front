// disable type checking for this file because I don't want to type all the components
// @ts-nocheck

import { useSelector } from 'react-redux';

import { createTheme, PaletteOptions } from '@mui/material/styles';

import themes from 'constants/themes';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import { stateType } from 'app/storeTypes';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      white: {
        main: string;
        contrastText: string;
      }
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions & {
      white?: {
        main: string;
        contrastText: string;
      }
    };
  }
}

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
        textTransform: 'none',
      },
      body1: {
        fontSize: '1.1rem',
      },
      body2: {
        fontSize: '1rem',
        textTransform: 'none',
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
