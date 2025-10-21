import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import registerReducer from "./RegisterSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});
