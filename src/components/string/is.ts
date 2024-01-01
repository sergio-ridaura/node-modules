import { StringIsType } from "./is.type";

/**
 * Is string.
 *
 * @param string
 * @returns
 */
export const stringIs: StringIsType = (string) => {
  return typeof string === "string";
};
