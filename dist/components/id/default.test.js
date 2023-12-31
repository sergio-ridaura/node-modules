"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("./default");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * idDefault test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("idDefault", () => {
    (0, node_test_1.it)("1. Return undefined when all parameters are undefined.", () => {
        const result = (0, default_1.idDefault)(undefined, undefined);
        node_assert_1.default.equal(result, undefined);
    });
    (0, node_test_1.it)("2. Return idName when idDefault are undefined.", () => {
        const result = (0, default_1.idDefault)("123", undefined);
        node_assert_1.default.equal(result, "123");
    });
    (0, node_test_1.it)("3. Return idDefault when idName is `default`.", () => {
        const result = (0, default_1.idDefault)("default", "456");
        node_assert_1.default.equal(result, "456");
    });
    (0, node_test_1.it)("4. Return undefined when idName is undefined.", () => {
        const result = (0, default_1.idDefault)("", undefined);
        node_assert_1.default.equal(result, "");
    });
    (0, node_test_1.it)("5. Return addClass when idName is undefined.", () => {
        const result = (0, default_1.idDefault)("default", undefined);
        node_assert_1.default.equal(result, undefined);
    });
});
