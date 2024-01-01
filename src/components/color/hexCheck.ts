import { colorHexRegex } from "./hexRegex";
import type { ColorHexCheckType } from "./hexCheck.type";

/**
 * Check that the hexadecimal color is correct.
 *
 * @param color Color to examine.
 * @returns It is hexadecimal.
 */
export const colorHexCheck: ColorHexCheckType = (color) => {
  return colorHexRegex.test(color);
};
