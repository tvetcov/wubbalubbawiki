import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICharacters } from './api.types';

const CHARACTER_API_BASE_URL = 'https://rickandmortyapi.com/api/';

export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({ baseUrl: CHARACTER_API_BASE_URL }),
    endpoints: (builder) => ({
        getCharactersByPage: builder.query<ICharacters, string>({
            query: (page = '1') => `character/?page=${page}`,
        }),
    }),
});

export const { useGetCharactersByPageQuery } = charactersApi;
