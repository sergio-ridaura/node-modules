"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("./check");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * dateCheck test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("dateCheck", () => {
    (0, node_test_1.it)("1. Return true when it receives a valid date.", () => {
        const result = (0, check_1.dateCheck)("2023-09-18 21:21:06");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return idName when idDefault are undefined.", () => {
        const result = (0, check_1.dateCheck)(1695074971);
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Return idDefault when idName is `default`.", () => {
        const result = (0, check_1.dateCheck)("1695074971");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Return undefined when idName is undefined.", () => {
        const result = (0, check_1.dateCheck)("2023-99-18 21:21:06");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return addClass when idName is undefined.", () => {
        const result = (0, check_1.dateCheck)("2023");
        node_assert_1.default.equal(result, true);
    });
});
