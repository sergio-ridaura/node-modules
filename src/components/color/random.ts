import { numberRandom } from "../number/random";

/**
 * Generates a random hexadecimal color.
 *
 * @returns Random color.
 */
export const colorRandom = (): string => {
  const colorHex: string[] = [
    "#",
    numberRandom(1, 255).toString(16).padStart(2, "0").toUpperCase(),
    numberRandom(1, 255).toString(16).padStart(2, "0").toUpperCase(),
    numberRandom(1, 255).toString(16).padStart(2, "0").toUpperCase(),
  ];

  return colorHex.join("");
};
