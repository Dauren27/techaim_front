import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { TGetReport } from "../../kit/modules/admin_ reports/TCreateReports";
import { TGetReportById } from "../../kit/modules/admin_ reports/admin_edit_reports/TEditReports";
export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Reports"],

  endpoints: (build) => ({
    createReport: build.mutation({
      query: (formData) => ({
        url: `/api/admin/report/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Reports"],
    }),
    updateReport: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/report/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Reports"],
    }),
    deleteReport: build.mutation({
      query: (id) => ({
        url: `/api/admin/report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reports"],
    }),
    getReports: build.query<TGetReport, void>({
      query: () => ({
        url: "/public-api/RUS/reports",
      }),
      providesTags: (result) => ["Reports"],
    }),
    getReportById: build.query<TGetReportById, any>({
      query: ({ id }) => ({
        url: `/public-api/report/${id}/RUS/pdf`,
      }),
    }),
  }),
});

export const {
  useCreateReportMutation,
  useDeleteReportMutation,
  useGetReportsQuery,
  useUpdateReportMutation,
  useGetReportByIdQuery,
} = reportsApi;
