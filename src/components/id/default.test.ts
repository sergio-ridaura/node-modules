import { idDefault } from "./default";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * idDefault test.
 * @see https://nodejs.org/api/test.html
 */
describe("idDefault", (): void => {
  it("1. Return undefined when all parameters are undefined.", (): void => {
    const result: string | undefined = idDefault(undefined, undefined);

    assert.equal(result, undefined);
  });

  it("2. Return idName when idDefault are undefined.", (): void => {
    const result: string | undefined = idDefault("123", undefined);

    assert.equal(result, "123");
  });

  it("3. Return idDefault when idName is `default`.", (): void => {
    const result: string | undefined = idDefault("default", "456");

    assert.equal(result, "456");
  });

  it("4. Return undefined when idName is undefined.", (): void => {
    const result: string | undefined = idDefault("", undefined);

    assert.equal(result, "");
  });

  it("5. Return addClass when idName is undefined.", (): void => {
    const result: string | undefined = idDefault("default", undefined);

    assert.equal(result, undefined);
  });
});
