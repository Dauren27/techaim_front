import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../api";
import { TGetPartnerById } from "../../kit/modules/admin_partners/admin_edit_partners/TEditPartners";
import { TGetPartners } from "../../kit/modules/admin_partners/TCreatePartner";
export const partnersApi = createApi({
  reducerPath: "partnersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Partners"],
  endpoints: (build) => ({
    createPartner: build.mutation({
      query: (formData) => ({
        url: `/api/admin/partner`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Partners"],
    }),
    updatePartner: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/admin/partner/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Partners"],
    }),
    deletePartner: build.mutation({
      query: (id) => ({
        url: `/api/admin/partner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Partners"],
    }),
    getPartners: build.query<TGetPartners, void>({
      query: () => ({
        url: "/public-api/RUS/partners",
      }),
      providesTags: (result) => ["Partners"],
    }),
    getPartnerById: build.query<TGetPartnerById, any>({
      query: ({ id }) => ({
        url: `/public-api/RUS/partner/${id}`,
      }),
    }),
  }),
});

export const {
  useCreatePartnerMutation,
  useDeletePartnerMutation,
  useGetPartnersQuery,
  useUpdatePartnerMutation,
  useGetPartnerByIdQuery,
} = partnersApi;
