import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { TGetProject } from "../../kit/modules/admin_project/TCreateProject";
import { TGetProjectById } from "../../kit/modules/admin_project/admin_edit_project/TEditProject";
export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Projects"],
  endpoints: (build) => ({
    createProject: build.mutation({
      query: (formData) => ({
        url: `/api/admin/project/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Projects"],
    }),
    updateProject: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/project/update/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Projects"],
    }),
    deleteProject: build.mutation({
      query: (id) => ({
        url: `/api/admin/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
    getProjects: build.query<TGetProject, void>({
      query: () => ({
        url: "/public-api/RUS/projects",
      }),
      providesTags: (result) => ["Projects"],
    }),
    getProjectById: build.query<TGetProjectById, any>({
      query: ({ id }) => ({
        url: `/public-api/RUS/project/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectsQuery,
  useUpdateProjectMutation,
  useGetProjectByIdQuery,
} = projectsApi;
