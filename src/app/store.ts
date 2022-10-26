import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import globalDataReducer from "../features/globalData/globalDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    globalData: globalDataReducer,
  },
});
