"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mphToKph_1 = require("./mphToKph");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * mphToKph test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("mphToKph.", () => {
    (0, node_test_1.it)("1. Return kph when receiving mph.", () => {
        const result = (0, mphToKph_1.mphToKph)(4);
        node_assert_1.default.equal(result, 6.44);
    });
    (0, node_test_1.it)("2. Return kph when receiving mph in decimals.", () => {
        const result = (0, mphToKph_1.mphToKph)(2.49);
        node_assert_1.default.equal(result, 4.01);
    });
    (0, node_test_1.it)("3. Return kph when receiving 0 mph.", () => {
        const result = (0, mphToKph_1.mphToKph)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Return kph when receiving a negative mph.", () => {
        const result = (0, mphToKph_1.mphToKph)(-0.98);
        node_assert_1.default.equal(result, -1.58);
    });
});
