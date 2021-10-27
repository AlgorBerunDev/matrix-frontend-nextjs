import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";

export interface INavigationResponse {
    id: number
    title: string
    is_path: boolean,
    path: string,
    children: INavigationResponse[]
}
export const navigationApi = createApi({
    reducerPath: "navigationApi",
    tagTypes: ["Navigation"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getNavigations: build.query<INavigationResponse[], number>({
            query: () => "navigations"
        })
    })
})

export const {useGetNavigationsQuery} = navigationApi;