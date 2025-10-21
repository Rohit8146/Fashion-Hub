import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRegEmail: (state, action) => {
      state.regEmail = action.payload;
    },
    setRegPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.cPassword = action.payload;
    },
  },
});

export const { setName, setRegEmail, setRegPassword, setConfirmPassword } =
  registerSlice.actions;
export default registerSlice.reducer;
