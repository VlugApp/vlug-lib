import { Static } from "@sinclair/typebox";

import { productType } from "../../../../types/typebox/product";

export const response = {
  200: productType,
};

export type Response = Static<(typeof response)[200]>;
