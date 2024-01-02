"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toString_1 = require("./toString");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * numberToString test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("numberToString.", () => {
    (0, node_test_1.it)("1. Return string when input is a non-zero number.", () => {
        const result = (0, toString_1.numberToString)(5);
        node_assert_1.default.equal(result, "5");
    });
    (0, node_test_1.it)("2. Return string when input is a positive number.", () => {
        const result = (0, toString_1.numberToString)(10);
        node_assert_1.default.equal(result, "10");
    });
    (0, node_test_1.it)("3. Return string when input is a negative number.", () => {
        const result = (0, toString_1.numberToString)(-25);
        node_assert_1.default.equal(result, "-25");
    });
    (0, node_test_1.it)("4. Return string when input is 0.", () => {
        const result = (0, toString_1.numberToString)(0);
        node_assert_1.default.equal(result, "0");
    });
    (0, node_test_1.it)("5. Return string when input is a decimal less than zero.", () => {
        const result = (0, toString_1.numberToString)(-0.5);
        node_assert_1.default.equal(result, "-0.5");
    });
    (0, node_test_1.it)("6. Returns string when given a string with very large number.", () => {
        const result = (0, toString_1.numberToString)(1.23e50);
        node_assert_1.default.equal(result, "1.23e+50");
    });
});
