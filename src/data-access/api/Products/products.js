import { apiSlice } from "../api.slice";
import { gql } from "graphql-request";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
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
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = extendedApi;
