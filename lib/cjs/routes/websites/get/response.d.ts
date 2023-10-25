import { Static } from "@sinclair/typebox";
export declare const response: {
    readonly 200: import("@sinclair/typebox").TObject<{
        websites: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
        }>>;
    }>;
};
export type Response = Static<(typeof response)[200]>;
//# sourceMappingURL=response.d.ts.map