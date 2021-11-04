import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IProductProperties {
    id: number,
    title: string,
    description: string
}
export interface IConsole {
    id: number,
    console: {
        id: number,
        name: string,
        title: string,
        image: {
            id: number,
            url: string
        }
    },
    product: {
        id: number
    }
}
export interface IProduct {
    id: number,
    name: string,
    console_name: string,
    model_name: string,
    short_info: string,
    full_info: string,
    product_properties: IProductProperties[],
    consoles?: IConsole[],
    images: IImage[],
}

export const productApi = createApi({
    reducerPath: "product-api",
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getProduct: build.query<IProduct, number>({
            query: (id) => "products/"+id
        })
    })
})

export const {useGetProductQuery} = productApi;