"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celsiusToFahrenheit_1 = require("./celsiusToFahrenheit");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * celsiusToFahrenheit test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("celsiusToFahrenheit.", () => {
    (0, node_test_1.it)("1. Return fahrenheit when receiving celsius.", () => {
        const result = (0, celsiusToFahrenheit_1.celsiusToFahrenheit)(4);
        node_assert_1.default.equal(result, 39.2);
    });
    (0, node_test_1.it)("2. Return fahrenheit when receiving celsius in decimals.", () => {
        const result = (0, celsiusToFahrenheit_1.celsiusToFahrenheit)(2.49);
        node_assert_1.default.equal(result, 36.48);
    });
    (0, node_test_1.it)("3. Return fahrenheit when receiving 0 celsius.", () => {
        const result = (0, celsiusToFahrenheit_1.celsiusToFahrenheit)(0);
        node_assert_1.default.equal(result, 32);
    });
    (0, node_test_1.it)("4. Return fahrenheit when receiving a negative celsius.", () => {
        const result = (0, celsiusToFahrenheit_1.celsiusToFahrenheit)(-0.98);
        node_assert_1.default.equal(result, 30.24);
    });
});
