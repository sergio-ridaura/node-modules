import { emailRegex } from "./regex";
import type { EmailCheckType } from "./check.type";

/**
 * Check that the email is in a correct format.
 *
 * @param email Email to check if it is valid.
 * @returns The email is valid.
 */
export const emailCheck: EmailCheckType = (email) => {
  return emailRegex.test(email);
};
