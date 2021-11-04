import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base } from "../config";
import IImage from "../Interfaces/IImage";

export interface IFilterType {
    id: number,
    title: string,
    isAll: boolean
}

export interface IFilterGroup {
    id: number,
    header: string,
    filter_types: IFilterType[]
}
export interface IFilter {
    id: number,
    catalog_name: string,
    filter_groups: IFilterGroup[]
}
export interface ICatalog {
    id: number,
    header: string,
    title: string,
    image: IImage,
    filter: IFilter
}

export interface IProductCatalogConsole {
    id: number,
    console: {
        id: number,
        name: string,
        title: string,
        image: {
            url: string
        }
    },
    product: {
        id: number
    }
}
export interface ICatalogProduct {
    id: number,
    title: string,
    image: IImage,
    consoles: IProductCatalogConsole[],
    product: {
        id: number
    }
}
export const catalogApi = createApi({
    reducerPath: "catalog-api",
    tagTypes: ["Catalog"],
    baseQuery: fetchBaseQuery({baseUrl: base.domain }),
    endpoints: (build) => ({
        getCatalog: build.query<ICatalog, number>({
            query: (id) => "catalogs/"+id
        }),
        getCatalogProduct: build.query<ICatalogProduct[], number>({
            query: (id) => "catalog-products?catalog.id="+id
        }),
    })
})

export const {useGetCatalogQuery, useGetCatalogProductQuery} = catalogApi;