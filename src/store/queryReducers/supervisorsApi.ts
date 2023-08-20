import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { IGetSupervisor } from "../../kit/modules/admin_supervisors/TCreateSupervisor";
import { TGetSupervisorById } from "../../kit/modules/admin_supervisors/admin_edit_supervisors/TEditSupervisor";
export const supervisorsApi = createApi({
  reducerPath: "supervisorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Supervisors"],

  endpoints: (build) => ({
    createSupervisor: build.mutation({
      query: (formData) => ({
        url: `/api/admin/supervisor/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Supervisors"],
    }),
    updateSupervisor: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/supervisor/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Supervisors"],
    }),
    deleteSupervisor: build.mutation({
      query: (id) => ({
        url: `/api/admin/supervisor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Supervisors"],
    }),
    getSupervisors: build.query<IGetSupervisor, void>({
      query: () => ({
        url: "/public-api/RUS/supervisors",
      }),
      providesTags: (result) => ["Supervisors"],
    }),
    getSupervisorById: build.query<TGetSupervisorById, any>({
      query: ({ id }) => ({
        url: `/public-api/RUS/supervisor/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateSupervisorMutation,
  useDeleteSupervisorMutation,
  useGetSupervisorsQuery,
  useUpdateSupervisorMutation,
  useGetSupervisorByIdQuery,
} = supervisorsApi;
