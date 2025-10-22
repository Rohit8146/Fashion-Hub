import { configureStore } from "@reduxjs/toolkit";
import forgetPasswordReducer from "./forgetPasswordSlice";
import loginReducer from "./loginSlice";
import registerReducer from "./RegisterSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    forgetPassword: forgetPasswordReducer,
  },
});
