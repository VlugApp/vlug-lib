import { Static, Type } from "@sinclair/typebox";

import { productType } from "../../../types/typebox/product.js";
import { generateOptionalSchema } from "../../../helpers/typebox/generate_optional_schema.js";

export const response = {
  200: Type.Object({
    products: Type.Array(productType),
    cursor: generateOptionalSchema(Type.String()),
  }),
};

export type Response = Static<(typeof response)[200]>;
