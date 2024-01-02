import { stringContainSymbolRegex } from "./containSymbolRegex";
import type { StringContainSymbolType } from "./containSymbol.type";

/**
 * Text containing symbols.
 *
 * @param text Text to analyze.
 * @returns Containing symbols.
 */
export const stringContainSymbol: StringContainSymbolType = (text) => {
  return stringContainSymbolRegex.test(text);
};
