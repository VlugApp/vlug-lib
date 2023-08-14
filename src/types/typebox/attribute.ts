import { Static, Type } from '@sinclair/typebox';

export const attributeType = Type.Object({
  id: Type.String(),
  name: Type.String(),
  terms: Type.Array(
    Type.Object({
      id: Type.String(),
      name: Type.String(),
    }),
  ),
});

export type AttributeType = Static<typeof attributeType>;
