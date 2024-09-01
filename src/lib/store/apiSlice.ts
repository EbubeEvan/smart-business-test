import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = apiSlice