import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import { ICard } from '../../components/HoverCardV1/index';

export const ourobjectApi = createApi({
    reducerPath: "our-object-api",
    tagTypes: ["Our-object"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getOurobjects: build.query<ICard[], number>({
            query: () => "our-objects"
        })
    })
})

export const {useGetOurobjectsQuery} = ourobjectApi;