import { Static } from '@sinclair/typebox';
export declare const attributeType: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    terms: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
    }>>;
}>;
export type AttributeType = Static<typeof attributeType>;
//# sourceMappingURL=attribute.d.ts.map