import { createSlice } from "@reduxjs/toolkit";
import { locationApi } from "../services/locationApi";

const initialState = {
  countryCode: ""
};

const infoSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setCountryCode: (state, action) => {
      state.countryCode = action.payload.toLowerCase();
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(locationApi.endpoints.getCountryCode.matchFulfilled, (state, action) => {
        state.countryCode = action.payload.data;
      });
  }

});

const { reducer, actions } = infoSlice;

export const { setCountryCode } = actions;

export default reducer;
