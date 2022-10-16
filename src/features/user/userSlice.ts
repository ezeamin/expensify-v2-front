import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./userTypes";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    dni: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
