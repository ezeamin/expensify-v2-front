import themes from "constants/themes";
import { createSlice } from "@reduxjs/toolkit";
import { GlobalDataState } from "./globalDataTypes";

const initialState: GlobalDataState = {
  theme: themes.DARK,
};

export const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalDataSlice.actions;

export default globalDataSlice.reducer;
