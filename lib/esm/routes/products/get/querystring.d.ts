import { Static } from "@sinclair/typebox";
export declare const querystring: import("@sinclair/typebox").TObject<{
    search: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TString[], import("@sinclair/typebox").TNull]>>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...import("@sinclair/typebox").TInteger[], import("@sinclair/typebox").TNull]>>;
}>;
export type Querystring = Static<typeof querystring>;
//# sourceMappingURL=querystring.d.ts.map