import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '../types'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], null>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = apiSlice