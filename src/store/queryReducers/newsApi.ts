import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { TGetNewsById } from "../../kit/modules/admin_news/admin_edit_news/TEditNews";
import { TGetNews } from "../../kit/modules/admin_news/TCreateNews";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["News"],
  endpoints: (build) => ({
    create: build.mutation({
      query: (formData) => ({
        url: "/api/admin/news",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),
    update: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/news/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["News"],
    }),
    deleteNews: build.mutation({
      query: (id) => ({
        url: `/api/admin/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),
    getNews: build.query<TGetNews, void>({
      query: () => ({
        url: "/public-api/RUS/news",
      }),
      providesTags: (result) => ["News"],
    }),
    getNewsById: build.query<TGetNewsById, number>({
      query: (id) => ({
        url: `/public-api/RUS/news/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateMutation,
  useDeleteNewsMutation,
  useGetNewsQuery,
  useUpdateMutation,
} = newsApi;
