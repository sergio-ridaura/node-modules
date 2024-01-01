import { colorHexCheck } from "./hexCheck";
import { colorHexExpand } from "./hexExpand";
import { numberIsPositive } from "../number/isPositive";
import type { ColorBrightnessRandomType } from "./randomBrightness.type";

/**
 * Generates a random hexadecimal color from changing the brightness of another.
 *
 * @param color Hexadecimal color.
 * @param variation Brightness variation.
 * @returns Random color brightness.
 */
export const colorBrightnessRandom: ColorBrightnessRandomType = (
  color,
  variation = 100
) => {
  if (!colorHexCheck(color)) {
    return "error: invalid color";
  }

  if (!(numberIsPositive(variation) ?? false)) {
    return "error: invalid variation";
  }

  if (color.length === 4) {
    color = colorHexExpand(color);
  }

  const colorRgb: number[] = [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
  ];

  for (let index = 0; index < 5; index++) {
    const random: number = variation * (Math.random() - 0.5);

    colorRgb[0] = Math.round(Math.max(0, Math.min(255, colorRgb[0] + random)));
    colorRgb[1] = Math.round(Math.max(0, Math.min(255, colorRgb[1] + random)));
    colorRgb[2] = Math.round(Math.max(0, Math.min(255, colorRgb[2] + random)));

    colorRgb[0] = Math.max(0, Math.min(255, colorRgb[0]));
    colorRgb[1] = Math.max(0, Math.min(255, colorRgb[1]));
    colorRgb[2] = Math.max(0, Math.min(255, colorRgb[2]));

    const colorHex: string[] = [
      "#",
      colorRgb[0].toString(16).padStart(2, "0").toUpperCase(),
      colorRgb[1].toString(16).padStart(2, "0").toUpperCase(),
      colorRgb[2].toString(16).padStart(2, "0").toUpperCase(),
    ];

    const result = colorHex.join("");

    if (color !== result) {
      index = 5;
      return result;
    }
  }

  return "error: unknown error";
};
