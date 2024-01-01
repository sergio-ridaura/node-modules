import { colorHexCheck } from "./hexCheck";
import type { ColorHexExpandType } from "./hexExpand.type";

/**
 * Return a 6-digit hexadecimal created from a 3-digit hexadecimal color.
 *
 * @param color Color to examine.
 * @returns 6 digit hexadecimal color.
 */
export const colorHexExpand: ColorHexExpandType = (color) => {
  if (!colorHexCheck(color)) {
    return "error: invalid color";
  }

  color = color.toUpperCase();

  if (color.length === 7) {
    return color;
  }

  const results: string[] = [
    "#",
    color[1],
    color[1],
    color[2],
    color[2],
    color[3],
    color[3],
  ];

  return results.join("");
};
