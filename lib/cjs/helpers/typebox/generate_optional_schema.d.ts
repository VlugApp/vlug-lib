import { TSchema } from '@sinclair/typebox';
export declare function generateOptionalSchema<T extends TSchema>(schema: T): import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[...T[], import("@sinclair/typebox").TNull]>>;
//# sourceMappingURL=generate_optional_schema.d.ts.map