import stringIsUppercaseTest from "./isUppercase.utils";
import { describe, it } from "vitest";
import { testClean } from "@vit/test";

testClean();

describe("stringIsUppercase. Text with uppercase letters.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    stringIsUppercaseTest("abc", false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    stringIsUppercaseTest("abc", false);
  });

  it("3. Returns true when the string contains only uppercase letters.", (): void => {
    stringIsUppercaseTest("ABC", true);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    stringIsUppercaseTest("abcABC", false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    stringIsUppercaseTest("abc123", false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    stringIsUppercaseTest("abc$%&", false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    stringIsUppercaseTest("abc$%&", false);
  });

  it("8. Return false when the string is empty.", (): void => {
    stringIsUppercaseTest("", false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    stringIsUppercaseTest("123", false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    stringIsUppercaseTest("$%&", false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    stringIsUppercaseTest("123$%&", false);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    stringIsUppercaseTest("abc ABC", false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    stringIsUppercaseTest("abc 123", false);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    stringIsUppercaseTest("123 $%&", false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    stringIsUppercaseTest("áÁèÈïÏ", false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    stringIsUppercaseTest("世界", false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    stringIsUppercaseTest("😊", false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    stringIsUppercaseTest(" ", false);
  });
});
