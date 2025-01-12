import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL =
  import.meta.env.VITE_MODE === "development"
    ? "http://localhost:3030/api/user"
    : "/api/user";
export const dashboard = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    credentials: "include",
  }),
  tagTypes: ["dashboard"],
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: () => "/dashboard",
      providesTags: ["dashboard"],
    }),
  }),
});
export const { useGetDashboardQuery } = dashboard;
