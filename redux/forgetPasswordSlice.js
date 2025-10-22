import { createSlice } from "@reduxjs/toolkit";

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: {
    password: "",
    cPassword: "",
  },
  reducers: {
    setForPassword: (state, action) => {
      state.password = action.payload;
    },
    setForConfirmPassword: (state, action) => {
      state.cPassword = action.payload;
    },
  },
});

export const { setForPassword, setForConfirmPassword } = forgetPasswordSlice.actions;
export default forgetPasswordSlice.reducer;
