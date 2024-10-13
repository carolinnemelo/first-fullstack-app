import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { buildPassword } from "../lib";

test("Should return error when password length is bellow or equal to zero", () => {
  const passwordLength = 0;
  const result = buildPassword(passwordLength);
  deepEqual(result, "Invalid Length");
});

test("Should return one random letter or number", () => {
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const numbersArr = new Array(10).fill(null).map((_, i) => {return i});

  const passwordLength = 1;
  const result = buildPassword(passwordLength);
  deepEqual(numbersArr.includes(Number(result)), true);
});

test.skip("Should return 5 random letters", () => {
  const passwordLength = 5;
  const result = buildPassword(passwordLength);
  deepEqual(result?.length, 5);
});

