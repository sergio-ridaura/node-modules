"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toBoolean_1 = require("./toBoolean");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * numberToBoolean test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("numberToBoolean.", () => {
    (0, node_test_1.it)("1. Return true when input is a non-zero number.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(5);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return true when input is a positive number.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(10);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Return true when input is a negative number.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(-25);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("4. Return false when input is 0.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(0);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return false when input is a decimal less than zero.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(-0.5);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("6. Returns true when given a string with very large number.", () => {
        const result = (0, toBoolean_1.numberToBoolean)(1.23e50);
        node_assert_1.default.equal(result, true);
    });
});
