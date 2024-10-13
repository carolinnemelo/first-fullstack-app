import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { generateRandomLetters } from "../lib";

test("Should return message zero letters", () => {
  const passwordLength = 0;
  const result = generateRandomLetters(passwordLength);
  deepEqual(result, "zero letters");
});

test("Should return one random letter", () => {
const alphabet = [...Array(26)].map(
  (v, i) => (v = String.fromCharCode(i + 97))
);
const passwordLength = 1;
const result = generateRandomLetters(passwordLength);
console.log(result);

  deepEqual(alphabet.includes(result), true);
});

test.skip("Should return 5 random letters", () => {
  const passwordLength = 5;
  const result = generateRandomLetters(passwordLength);
  deepEqual(result?.length, 5);
});

