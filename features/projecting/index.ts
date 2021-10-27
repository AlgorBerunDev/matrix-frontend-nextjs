import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IProjecting {
    header: string,
    title: string,
    description: string,
    images: IImage[],
    button_text: string,
    path: string
}

export const projectingApi = createApi({
    reducerPath: "projecting-api",
    tagTypes: ["Projecting"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getProjecting: build.query<IProjecting, number>({
            query: () => "projecting"
        })
    })
})

export const {useGetProjectingQuery} = projectingApi;