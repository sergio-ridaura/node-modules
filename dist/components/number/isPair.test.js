"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isPair_1 = require("./isPair");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * numberIsPair test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("numberIsPair.", () => {
    (0, node_test_1.it)("1. Return true when input is an even number.", () => {
        const result = (0, isPair_1.numberIsPair)(4);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return true when input is zero.", () => {
        const result = (0, isPair_1.numberIsPair)(0);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Return true when input is a negative even number.", () => {
        const result = (0, isPair_1.numberIsPair)(-6);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("4. Return false when input is a negative odd number.", () => {
        const result = (0, isPair_1.numberIsPair)(-3);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return false when input is a positive odd number.", () => {
        const result = (0, isPair_1.numberIsPair)(7);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return true when input is a positive even number.", () => {
        const result = (0, isPair_1.numberIsPair)(10);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("6. Returns true when given a string with very large number.", () => {
        const result = (0, isPair_1.numberIsPair)(1.23e50);
        node_assert_1.default.equal(result, true);
    });
});
