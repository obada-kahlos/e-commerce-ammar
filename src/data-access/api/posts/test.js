import { apiSlice } from "../api.slice";
import { gql } from "graphql-request";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          query: gql`
            query MyQuery {
              users {
                name
                primary_Position
                hono
                gender
                email
                backup_email
                dob
                id
              }
            }
          `,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = extendedApi;
