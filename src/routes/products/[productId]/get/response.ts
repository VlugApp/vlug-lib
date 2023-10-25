import { Static, Type } from "@sinclair/typebox";

import { productType } from "../../../../types/typebox/product.js";

export const response = {
  200: Type.Object({
    ...productType.properties,
    connectedWebsiteIds: Type.Array(Type.String()),
  }),
};

export type Response = Static<(typeof response)[200]>;
