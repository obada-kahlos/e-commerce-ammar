import { apiSlice } from "../api.slice";
import { gql } from "graphql-request";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          query: gql`
            query MyQuery {
              Products {
                id
                product_Image
                product_count
                product_description
                product_name
                product_price
                product_status
              }
            }
          `,
        },
      }),
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "",
        method: "POST",
        body: {
          query: gql`
            mutation MyMutation($payload: Products_insert_input!) {
              insert_Products_one(object: $payload) {
                id
              }
            }
          `,
          variables: {
            payload,
          },
        },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = extendedApi;
