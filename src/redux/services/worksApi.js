import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../../utils/makeUrl";

import { WORKS_API } from "../../utils/constants";

export const worksApi = createApi({
  reducerPath: "worksApi",
  tagTypes: ["Portfolio"],
  baseQuery: fetchBaseQuery({baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    fetchWorks: builder.mutation({
      query: () => ({
        url: WORKS_API.WORKS,
        method: "GET"
      })
    }),
    fetchWork: builder.mutation({
      query: (id) => ({
        url: `${WORKS_API.WORKS}/${id}/`,
        method: "GET"
      })
    }),
    addWorks: builder.mutation({
      query: (body) => ({
        url: "works",
        method: "POST",
        body
      }),
      invalidatesTags: [{type: "Portfolio", id: "LIST"}]
    }),
    deleteWorks: builder.mutation({
      query: (id) => ({
        url: `works/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [{type: "Portfolio", id: "LIST"}]
    }),
    fetchTags: builder.mutation({
      query: () => ({
        url: WORKS_API.TAGS,
        method: "GET"
      })
    })
  })
});

export const {
  useFetchWorksMutation,
  useFetchWorkMutation,
  useAddWorksMutation,
  useDeleteWorksMutation,
  useFetchTagsMutation
} = worksApi;
