import stringIsUppercaseRegex from "./isUppercaseRegex";

/** Text with uppercase letters. */
export default function stringIsUppercase(text: string): boolean {
  return stringIsUppercaseRegex.test(text);
}
