import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IBrand {
    id: number,
    image: IImage,
}

export const brandApi = createApi({
    reducerPath: "brands",
    tagTypes: ["Brands"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getBrands: build.query<IBrand[], number>({
            query: () => "brands"
        })
    })
})

export const {useGetBrandsQuery} = brandApi;