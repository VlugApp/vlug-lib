import { Static, Type } from "@sinclair/typebox";

export const response = {
  200: Type.Object({
    websites: Type.Array(
      Type.Object({
        id: Type.String(),
        name: Type.String(),
      })
    ),
  }),
} as const;

export type Response = Static<(typeof response)[200]>;
