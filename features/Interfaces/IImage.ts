import ISizes from "./ISizes";

export default interface IImage {
        id: number,
        name: string,
        alternativeText: string,
        caption: string,
        width: number,
        height: number,
        formats: ISizes,
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: string,
        provider: string,
        provider_metadata: string,
        created_at: Date,
        updated_at: Date
}