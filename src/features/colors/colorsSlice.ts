import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Color {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export const colorsApi = createApi({
    reducerPath: 'colorsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api/',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', 'reqres-free-v1')
            return headers
        }
    }),
    endpoints: builder => ({
        getColors: builder.query<{ data: Color[] }, void>({
            query: () => 'colors?per_page=12',
        }),
        getColorById: builder.query<{ data: Color }, number>({
            query: id => `colors/${id}?delay=1`,
            keepUnusedDataFor: 5
        })
    })
})

export const { useGetColorsQuery, useGetColorByIdQuery } = colorsApi