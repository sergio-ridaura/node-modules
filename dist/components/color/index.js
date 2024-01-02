"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorSimilar = exports.colorBrightnessRandom = exports.colorRandom = exports.colorHexExpand = exports.colorHexRegex = void 0;
/**
 * Related to color.
 */
var hexRegex_1 = require("./hexRegex");
Object.defineProperty(exports, "colorHexRegex", { enumerable: true, get: function () { return hexRegex_1.colorHexRegex; } });
var hexExpand_1 = require("./hexExpand");
Object.defineProperty(exports, "colorHexExpand", { enumerable: true, get: function () { return hexExpand_1.colorHexExpand; } });
var random_1 = require("./random");
Object.defineProperty(exports, "colorRandom", { enumerable: true, get: function () { return random_1.colorRandom; } });
var randomBrightness_1 = require("./randomBrightness");
Object.defineProperty(exports, "colorBrightnessRandom", { enumerable: true, get: function () { return randomBrightness_1.colorBrightnessRandom; } });
var similar_1 = require("./similar");
Object.defineProperty(exports, "colorSimilar", { enumerable: true, get: function () { return similar_1.colorSimilar; } });