import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import { ICard } from '../../components/HoverCardV2/index';

export const officialsApi = createApi({
    reducerPath: "officials-api",
    tagTypes: ["Officials"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getOfficials: build.query<ICard[], number>({
            query: () => "officials"
        })
    })
})

export const {useGetOfficialsQuery} = officialsApi;