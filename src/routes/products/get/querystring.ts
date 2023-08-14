import { Static, Type } from "@sinclair/typebox";

import { generateOptionalSchema } from "../../../helpers/typebox/generate_optional_schema";

export const querystring = Type.Object({
  search: generateOptionalSchema(Type.String()),
  cursor: generateOptionalSchema(Type.String()),
  limit: generateOptionalSchema(
    Type.Integer({
      description: "The limit has to be a number between 1 and 50.",
    })
  ),
});

export type Querystring = Static<typeof querystring>;
