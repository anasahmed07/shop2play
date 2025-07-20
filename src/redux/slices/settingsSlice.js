import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'ar',
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLan: (state, action) => {
      state.language = action.payload || "ar";
    },
  },
});

export const { changeLan } = languageSlice.actions;

export default languageSlice.reducer;
