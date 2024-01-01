"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
const is_1 = require("./is");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * numberRandom test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("numberRandom.", () => {
    (0, node_test_1.it)("1. Returns a random number when receiving a minimum and maximum number.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(0, 10));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Returns a random number when receiving a minimum number.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(10));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Returns a random number when no data is received.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)());
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("5. Returns a error when it receives a minimum number higher than the maximum.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(10, 0));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Returns a random number upon receiving a negative minimum and maximum number.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(-10, 10));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("7. Returns a error when it receives a negative minimum number greater than the maximum.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(-10, -20));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Returns a random number when receiving a minimum number 0.", () => {
        const result = (0, is_1.numberIs)((0, random_1.numberRandom)(0));
        node_assert_1.default.equal(result, true);
    });
});
