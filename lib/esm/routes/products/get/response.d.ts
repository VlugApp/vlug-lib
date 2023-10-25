import { Static } from "@sinclair/typebox";
export declare const response: {
    200: import("@sinclair/typebox").TObject<{
        products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
            sku: import("@sinclair/typebox").TString;
            regularPrice: import("@sinclair/typebox").TString;
            salePrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
            images: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
                src: import("@sinclair/typebox").TString;
            }>>;
            attributes: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TString;
                terms: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TString;
                    name: import("@sinclair/typebox").TString;
                }>>;
            }>>;
        }>>;
        cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
    }>;
};
export type Response = Static<(typeof response)[200]>;
//# sourceMappingURL=response.d.ts.map