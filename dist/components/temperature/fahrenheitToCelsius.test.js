"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fahrenheitToCelsius_1 = require("./fahrenheitToCelsius");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * fahrenheitToCelsius test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("fahrenheitToCelsius.", () => {
    (0, node_test_1.it)("1. Return celsius when receiving fahrenheit.", () => {
        const result = (0, fahrenheitToCelsius_1.fahrenheitToCelsius)(3.99);
        node_assert_1.default.equal(result, -15.56);
    });
    (0, node_test_1.it)("2. Return celsius when receiving fahrenheit in decimals.", () => {
        const result = (0, fahrenheitToCelsius_1.fahrenheitToCelsius)(2.5);
        node_assert_1.default.equal(result, -16.39);
    });
    (0, node_test_1.it)("3. Return celsius when receiving 0 fahrenheit.", () => {
        const result = (0, fahrenheitToCelsius_1.fahrenheitToCelsius)(0);
        node_assert_1.default.equal(result, -17.78);
    });
    (0, node_test_1.it)("4. Return celsius when receiving a negative fahrenheit.", () => {
        const result = (0, fahrenheitToCelsius_1.fahrenheitToCelsius)(-0.98);
        node_assert_1.default.equal(result, -18.32);
    });
});
