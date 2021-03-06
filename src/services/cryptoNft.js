import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNftHeaders = {
  "x-rapidapi-host": "top-nft-collections-and-sales.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_TOKENNFT,
};

const baseUrl = "https://top-nft-collections-and-sales.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNftHeaders });

export const cryptoNftApi = createApi({
  reducerPath: "cryptoNftApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNft: builder.query({
      query: () => createRequest(`/collections/30d`),
    }),
  }),
});

export const { useGetNftQuery } = cryptoNftApi;
