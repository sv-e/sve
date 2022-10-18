import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { apiBaseUrl } from "../../utils/makeUrl";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://ipapi.co/json" }),
  endpoints: (builder) => ({
    getCountryCode: builder.mutation({
      query: (credentials) => ({
        url: "/",
        method: "GET"
      })
    })
  })
});

export const {
  useGetCountryCodeMutation
} = locationApi;
