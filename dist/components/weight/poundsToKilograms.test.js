"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const poundsToKilograms_1 = require("./poundsToKilograms");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * poundsToKilograms test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("poundsToKilograms.", () => {
    (0, node_test_1.it)("1. Return kilograms when receiving pounds.", () => {
        const result = (0, poundsToKilograms_1.poundsToKilograms)(5);
        node_assert_1.default.equal(result, 2.27);
    });
    (0, node_test_1.it)("2. Return kilograms when receiving pounds in decimals.", () => {
        const result = (0, poundsToKilograms_1.poundsToKilograms)(2.49);
        node_assert_1.default.equal(result, 1.13);
    });
    (0, node_test_1.it)("3. Return kilograms when receiving 0 pounds.", () => {
        const result = (0, poundsToKilograms_1.poundsToKilograms)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Return kilograms when receiving a negative pounds.", () => {
        const result = (0, poundsToKilograms_1.poundsToKilograms)(-0.99);
        node_assert_1.default.equal(result, -0.45);
    });
});
