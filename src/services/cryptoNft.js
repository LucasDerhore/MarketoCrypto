import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNftHeaders = {
  "x-rapidapi-host": "top-nft-collections-and-sales.p.rapidapi.com",
  "x-rapidapi-key": "9761a6ba9bmsh6013cb49db4a39bp12e7f9jsn9fca9409d5b0",
};

const baseUrl = "https://top-nft-collections-and-sales.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNftHeaders });

export const cryptoNftApi = createApi({
  reducerPath: "cryptoNftApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNft: builder.query({
      query: ({}) => createRequest("/collections/30d"),
    }),
  }),
});

export const { useGetNftQuery } = cryptoNftApi;
