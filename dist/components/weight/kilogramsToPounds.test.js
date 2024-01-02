"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kilogramsToPounds_1 = require("./kilogramsToPounds");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * kilogramsToPounds test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("kilogramsToPounds.", () => {
    (0, node_test_1.it)("1. Return pounds when receiving kilograms.", () => {
        const result = (0, kilogramsToPounds_1.kilogramsToPounds)(4);
        node_assert_1.default.equal(result, 8.82);
    });
    (0, node_test_1.it)("2. Return pounds when receiving kilograms in decimals.", () => {
        const result = (0, kilogramsToPounds_1.kilogramsToPounds)(2.49);
        node_assert_1.default.equal(result, 5.49);
    });
    (0, node_test_1.it)("3. Return pounds when receiving 0 kilograms.", () => {
        const result = (0, kilogramsToPounds_1.kilogramsToPounds)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Return pounds when receiving a negative kilograms.", () => {
        const result = (0, kilogramsToPounds_1.kilogramsToPounds)(-0.98);
        node_assert_1.default.equal(result, -2.16);
    });
});
