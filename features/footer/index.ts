import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IFooter {
    id: number,
    header: string,
    text_1: string,
    text_2: string,
    text_3: string,
    text_4: string,
    text_5: string,
    text_6: string,
    text_7: string,
    text_8: string,
}

export const footerApi = createApi({
    reducerPath: "footer",
    tagTypes: ["Footer"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getFooter: build.query<IFooter, number>({
            query: () => "footer"
        })
    })
})

export const {useGetFooterQuery} = footerApi;