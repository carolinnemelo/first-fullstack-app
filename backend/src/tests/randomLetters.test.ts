import { deepEqual, throws } from "node:assert/strict";
import test from "node:test";
import { generateRandomLetters } from "../lib";

test("Should throw error when 0 is given", () => {
const passwordLength = 0;
const result = generateRandomLetters(passwordLength);
deepEqual(result, []);

});

test("Should return one random letter", () => {
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const passwordLength = 1;
  const result = generateRandomLetters(passwordLength);

  deepEqual(alphabet.includes(result.toString()), true);
});

test("Should return 5 random letters", () => {
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const passwordLength = 5;
  const result = generateRandomLetters(passwordLength);

  const boolean = result.every((e) => alphabet.includes(e));

  deepEqual(result?.length, 5);
  deepEqual(boolean, true);
});
