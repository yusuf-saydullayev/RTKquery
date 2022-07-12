import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Userapi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/"
  }),
  endpoints: (builder) => ({
    getUser: builder.query ({
      query: (limit = '') => `users?${limit && `_limit=${limit}`}`
    })
  })
})


export const { useGetUserQuery } = Userapi 