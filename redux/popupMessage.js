import { createSlice } from "@reduxjs/toolkit";

const popupMessageSlice = createSlice({
  name: "popupMessage",
  initialState: {
    Heading: "",
    Subheading: "",
    Button: "",
    ButtonLabel: "",
  },
  reducers: {
    setHeading: (state, action) => {
      state.Heading = action.payload;
    },
    setSubheading: (state, action) => {
      state.Subheading = action.payload;
    },
    setButton: (state, action) => {
      state.Button = action.payload;
    },
    setButtonLabel: (state, action) => {
      state.ButtonLabel = action.payload;
    },
  },
});

export const { setHeading, setSubheading, setButton, setButtonLabel } =
  popupMessageSlice.actions;
export default popupMessageSlice.reducer;
