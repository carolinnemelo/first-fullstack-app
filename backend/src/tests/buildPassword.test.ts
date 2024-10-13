import { deepEqual, throws } from "node:assert/strict";
import test from "node:test";
import { buildPassword } from "../lib";

test("Should return error when password length is bellow or equal to zero", () => {
  const passwordLength = 0;
  throws(() => {
    buildPassword(passwordLength);
  }, /Invalid length/);
});

test("Should return one random letter or number", () => {
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const numbersArr = new Array(10).fill(null).map((_, i) => i);

  const passwordLength = 1;
  const result = buildPassword(passwordLength);
  deepEqual(
    numbersArr.includes(Number(result)) || alphabet.includes(result.toString()),
    true
  );
});

test.skip("Should return 5 random letters", () => {
  const alphabet = [...Array(26)].map(
    (v, i) => (v = String.fromCharCode(i + 97))
  );
  const passwordLength = 5;
  const numbersArr = new Array(10).fill(null).map((_, i) => i);
  const result = buildPassword(passwordLength);
  const boolean = result.every((e) => alphabet.includes(e));

  console.log(result);
  deepEqual(boolean, true);
  deepEqual(result?.length, 5);
});

