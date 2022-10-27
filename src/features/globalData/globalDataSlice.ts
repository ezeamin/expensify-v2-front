import themes from "constants/themes";
import { createSlice } from "@reduxjs/toolkit";
import { GlobalDataState } from "./globalDataTypes";
import viewsList from "components/Commons/Navegation/data/viewsList";

const initialState: GlobalDataState = {
  theme: themes.LIGHT,
  navegationActive: viewsList[0].id,
};

export const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setNavegationActive: (state, action) => {
      state.navegationActive = action.payload;
    }
  },
});

export const { setTheme,setNavegationActive } = globalDataSlice.actions;

export default globalDataSlice.reducer;
