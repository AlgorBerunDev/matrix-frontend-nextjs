import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface ITitleText {
    id: number,
    title: string,
    text: string
}
export interface IWhy {
    header: string,
    title: string,
    image: IImage,
    children: ITitleText[]
}

export const whyApi = createApi({
    reducerPath: "why-api",
    tagTypes: ["Why"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getWhy: build.query<IWhy, number>({
            query: () => "why-are-we"
        })
    })
})

export const {useGetWhyQuery} = whyApi;