import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { TGetTeam } from "../../kit/modules/admin_our_team/TCreateTeammate";
import { TGetTeamById } from "../../kit/modules/admin_our_team/admin_edit_team/TEditTeam";

export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Teams"],

  endpoints: (build) => ({
    createTeam: build.mutation({
      query: (formData) => ({
        url: `/api/admin/team_member/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Teams"],
    }),
    updateTeam: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/team_member/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Teams"],
    }),
    deleteTeam: build.mutation({
      query: (id) => ({
        url: `/api/admin/team_member/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teams"],
    }),
    getTeams: build.query<TGetTeam, void>({
      query: () => ({
        url: `/public-api/RUS/team_members`,
      }),
      providesTags: (result) => ["Teams"],
    }),
    getTeamById: build.query<TGetTeamById, any>({
      query: ({ id }) => ({
        url: `/public-api/RUS/team_member/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useGetTeamsQuery,
  useUpdateTeamMutation,
  useGetTeamByIdQuery,
} = teamsApi;
