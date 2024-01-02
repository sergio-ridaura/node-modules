"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainSymbol = void 0;
const containSymbolRegex_1 = require("./containSymbolRegex");
/**
 * Text containing symbols.
 *
 * @param text Text to analyze.
 * @returns Containing symbols.
 */
const stringContainSymbol = (text) => {
    return containSymbolRegex_1.stringContainSymbolRegex.test(text);
};
exports.stringContainSymbol = stringContainSymbol;
