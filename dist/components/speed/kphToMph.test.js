"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kphToMph_1 = require("./kphToMph");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * kphToMph test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("kphToMph.", () => {
    (0, node_test_1.it)("1. Return mph when receiving kph.", () => {
        const result = (0, kphToMph_1.kphToMph)(4.01);
        node_assert_1.default.equal(result, 2.49);
    });
    (0, node_test_1.it)("2. Return mph when receiving kph in decimals.", () => {
        const result = (0, kphToMph_1.kphToMph)(2.49);
        node_assert_1.default.equal(result, 1.55);
    });
    (0, node_test_1.it)("3. Return mph when receiving 0 kph.", () => {
        const result = (0, kphToMph_1.kphToMph)(0);
        node_assert_1.default.equal(result, 0);
    });
    (0, node_test_1.it)("4. Return mph when receiving a negative kph.", () => {
        const result = (0, kphToMph_1.kphToMph)(-0.98);
        node_assert_1.default.equal(result, -0.61);
    });
});
