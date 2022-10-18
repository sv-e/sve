import { createSlice } from "@reduxjs/toolkit";
// import { authApi } from "../services/authApi";

const initialState = {
  isDarkTheme: false
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    }
  }
});

const { reducer, actions } = themeSlice;

export const { setTheme } = actions;

export default reducer;
