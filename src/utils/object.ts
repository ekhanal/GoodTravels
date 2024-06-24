import { get } from "lodash";

export const getValue = (
  object: unknown,
  key: string,
  defaultValue: string = ""
) => get(object, key, defaultValue);
