import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { buildPassword } from "../lib";

test("Should return message when imputed zero numbers", () => {
  const passwordLength = 0;
  const result = buildPassword(passwordLength);
  deepEqual(result, "zero numbers");
});

test("Should return one random number", () => {
  const passwordLength = 1;
  const result = buildPassword(passwordLength);
  deepEqual(result?.length, 1);
});

test("Should return 5 random numbers", () => {
  const passwordLength = 5;
  const result = buildPassword(passwordLength);
  deepEqual(result?.length, 5);
});


