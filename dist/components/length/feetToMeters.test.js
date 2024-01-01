"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feetToMeters_1 = require("./feetToMeters");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * feetToMeters test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("feetToMeters.", () => {
    (0, node_test_1.it)("1. Return meters when receiving feet.", () => {
        const result = (0, feetToMeters_1.feetToMeters)(4);
        node_assert_1.default.equal(result, 1.22);
    });
    (0, node_test_1.it)("2. Return meters when receiving feet in decimals.", () => {
        const result = (0, feetToMeters_1.feetToMeters)(2.49);
        node_assert_1.default.equal(result, 0.76);
    });
    (0, node_test_1.it)("3. Return meters when receiving 0 feet.", () => {
        const result = (0, feetToMeters_1.feetToMeters)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Return meters when receiving a negative feet.", () => {
        const result = (0, feetToMeters_1.feetToMeters)(-0.98);
        node_assert_1.default.equal(result, -0.3);
    });
});
