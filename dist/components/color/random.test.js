"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
const hexCheck_1 = require("./hexCheck");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * colorRandom test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("colorRandom.", () => {
    (0, node_test_1.it)("1. Return valid hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, random_1.colorRandom)());
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return a different color code on each call.", () => {
        const color0 = (0, random_1.colorRandom)();
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(color0), true);
        const color1 = (0, random_1.colorRandom)();
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(color1), true);
        node_assert_1.default.notEqual(color0, color1);
    });
});
