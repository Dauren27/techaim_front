import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { IGetMentor } from "../../kit/modules/admin_mentors/TCreateMentors";
import { TGetMentorById } from "../../kit/modules/admin_mentors/admin_edit_mentor/TEditMentor";
export const mentorsApi = createApi({
  reducerPath: "mentorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Mentors"],

  endpoints: (build) => ({
    create: build.mutation({
      query: (formData) => ({
        url: `/public-api/mentor/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Mentors"],
    }),
    update: build.mutation({
      query: ({ id, body }) => ({
        url: `/public-api/mentor/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Mentors"],
    }),
    deleteMentor: build.mutation({
      query: (id) => ({
        url: `/api/admin/mentor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mentors"],
    }),
    getMentors: build.query<IGetMentor, void>({
      query: () => ({
        url: "/public-api/RUS/mentors",
      }),
      providesTags: (result) => ["Mentors"],
    }),
    getMentorById: build.query<TGetMentorById, any>({
      query: ({ id }) => ({
        url: `/public-api/RUS/mentor/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateMutation,
  useDeleteMentorMutation,
  useGetMentorsQuery,
  useUpdateMutation,
  useGetMentorByIdQuery,
} = mentorsApi;
