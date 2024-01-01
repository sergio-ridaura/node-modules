"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metersToFeet_1 = require("./metersToFeet");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * metersToFeet test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("metersToFeet.", () => {
    (0, node_test_1.it)("1. Returns feet when receiving meters.", () => {
        const result = (0, metersToFeet_1.metersToFeet)(4);
        node_assert_1.default.equal(result, 13.12);
    });
    (0, node_test_1.it)("2. Returns feet when receiving meters in decimals.", () => {
        const result = (0, metersToFeet_1.metersToFeet)(2.49);
        node_assert_1.default.equal(result, 8.17);
    });
    (0, node_test_1.it)("3. Returns feet when receiving 0 meters.", () => {
        const result = (0, metersToFeet_1.metersToFeet)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Returns feet when receiving a negative meters.", () => {
        const result = (0, metersToFeet_1.metersToFeet)(-0.98);
        node_assert_1.default.equal(result, -3.22);
    });
});
