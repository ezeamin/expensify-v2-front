import { store } from '../../app/store';
import { setTheme } from 'features/globalData/globalDataSlice';
import themes from 'constants/themes';
import { optionsModes } from './optionsModes';

export const options = [
  {
    name: 'MY_ACCOUNT',
    path: '/settings/user',
    mode: optionsModes.CLICK,
  },
  {
    name: 'THEME',
    path: '',
    mode: optionsModes.SWITCH,
  },
];
