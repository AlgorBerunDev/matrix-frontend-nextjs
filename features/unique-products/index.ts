import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IList {
    id: number
    text: string
}
export interface ICard {
    id: number,
    path: string,
    header: string
    lists: IList[]
}
export interface IUniqueProduct {
    id: number,
    image: IImage,
    children: ICard[]
}

export const uniqueApi = createApi({
    reducerPath: "unique-products",
    tagTypes: ["UniqueProducts"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getUnique: build.query<IUniqueProduct[], number>({
            query: () => "unique-products"
        })
    })
})

export const {useGetUniqueQuery} = uniqueApi;