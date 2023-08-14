import { Static, Type } from '@sinclair/typebox';

export const params = Type.Object({
  productId: Type.String(),
});

export type Params = Static<typeof params>;
