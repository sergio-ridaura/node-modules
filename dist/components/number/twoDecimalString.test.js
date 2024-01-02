"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twoDecimalString_1 = require("./twoDecimalString");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * twoDecimalsString test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("twoDecimalsString.", () => {
    (0, node_test_1.it)("1. Return a number in string with two decimal places when given a positive integer.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(5);
        node_assert_1.default.equal(result, "5.00");
    });
    (0, node_test_1.it)("2. Return a number in string with two decimal places when given a positive float.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(3.14159);
        node_assert_1.default.equal(result, "3.14");
    });
    (0, node_test_1.it)("3. Return a number in string with two decimal places when given a negative integer.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(-3.14159);
        node_assert_1.default.equal(result, "-3.14");
    });
    (0, node_test_1.it)("4. Return a number in string 0 when given 0.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(0);
        node_assert_1.default.equal(result, "0.00");
    });
    (0, node_test_1.it)("5. Returns a number in string with two decimal places when given a positive float value, where rounding alters the digits.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(1999.9999);
        node_assert_1.default.equal(result, "2000.00");
    });
    (0, node_test_1.it)("6. Returns a number in string with two decimal places when given a negative float value, where rounding alters the digits.", () => {
        const result = (0, twoDecimalString_1.twoDecimalsString)(-1999.9999);
        node_assert_1.default.equal(result, "-2000.00");
    });
});
