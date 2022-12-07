import { createSlice } from '@reduxjs/toolkit';

import { GlobalDataState } from './globalDataTypes';

import themes from 'constants/themes';
import { LanguagesList } from 'constants/languagesList';


const initialState: GlobalDataState = {
  theme: themes.LIGHT,
  navegationActive: "OVERVIEW",
  language: LanguagesList.SPANISH,
};

export const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setNavegationActive: (state, action) => {
      state.navegationActive = action.payload;
    },
  },
});

export const { setTheme, setNavegationActive } = globalDataSlice.actions;

export default globalDataSlice.reducer;
