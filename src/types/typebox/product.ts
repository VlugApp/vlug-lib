import { Static, Type } from "@sinclair/typebox";

import { generateOptionalSchema } from "../../helpers/typebox/generate_optional_schema";

export const productType = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: generateOptionalSchema(Type.String()),
  sku: Type.String(),
  regularPrice: Type.String(),
  salePrice: generateOptionalSchema(Type.String()),
  images: Type.Array(
    Type.Object({
      id: Type.String(),
      name: generateOptionalSchema(Type.String()),
      src: Type.String(),
    })
  ),
  attributes: Type.Array(
    Type.Object({
      id: Type.String(),
      name: Type.String(),
      terms: Type.Array(
        Type.Object({
          id: Type.String(),
          name: Type.String(),
        })
      ),
    })
  ),
});

export type ProductType = Static<typeof productType>;
