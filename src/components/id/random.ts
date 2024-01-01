import {stringIs} from "../string/is";
import type { IdRandomType, IsRandomCharType } from "./random.types";

/** Random identifier. */
export function idRandom({
  prior = "",
  length = 8,
}: IdRandomType = {}): string {
  return "abcd1234";
}

function passwordRandom({
  length = 8,
  letters = true,
  capitals = true,
  numbers = true,
  symbols = true,
  add = false,
}: PasswordRandomType = {}): string {
  let list: string = "";
  let countOptions = 0;

  const char: PasswordRandomCharType = {
    letters: "abcdefghijklmnopqrstuvwxyz",
  };

  let password: string = "";

  if (letters) {
    list += char.letters;
    password += char.letters.charAt(
      Math.floor(Math.random() * char.letters.length)
    );
    countOptions++;
  }

  if (capitals) {
    list += char.capitals;
    password += char.capitals.charAt(
      Math.floor(Math.random() * char.capitals.length)
    );
    countOptions++;
  }

  if (numbers) {
    list += char.numbers;
    password += char.numbers.charAt(
      Math.floor(Math.random() * char.numbers.length)
    );
    countOptions++;
  }

  if (symbols) {
    list += char.symbols;
    password += char.symbols.charAt(
      Math.floor(Math.random() * char.symbols.length)
    );
    countOptions++;
  }

  if (stringIs(add) && add !== "") {
    const adding: string = String(add);
    list += adding;
    password += adding.charAt(Math.floor(Math.random() * adding.length));
    countOptions++;
  }

  if (countOptions > length) {
    return "error: invalid received length for received configuration";
  }

  for (let i = 0; i < length - countOptions; i++) {
    password += list.charAt(Math.floor(Math.random() * list.length));
  }

  const charPassword: string[] = password.split("");

  for (let i: number = charPassword.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [charPassword[i], charPassword[j]] = [charPassword[j], charPassword[i]];
  }

  return charPassword.join("");
}
