import { stringIsSymbolRegex } from "./isSymbolRegex";
import type { StringIsSymbolType } from "./isSymbol.type";

/**
 * Text with symbols.
 *
 * @param text Text to analyze.
 * @returns With symbols.
 */
export const stringIsSymbol: StringIsSymbolType = (text) => {
  return stringIsSymbolRegex.test(text);
};
