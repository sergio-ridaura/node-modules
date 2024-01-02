import type { StringIsType } from "./is.type";

/**
 * Is string.
 *
 * @param string To analyze.
 * @returns Is string.
 */
export const stringIs: StringIsType = (string) => {
  return typeof string === "string";
};
