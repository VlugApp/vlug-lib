import { Type, TSchema } from '@sinclair/typebox';

export function generateOptionalSchema<T extends TSchema>(schema: T) {
  return Type.Optional(Type.Union([...[schema], Type.Null()]));
}
