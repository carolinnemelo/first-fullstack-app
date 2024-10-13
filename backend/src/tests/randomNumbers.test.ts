import { deepEqual, throws } from "node:assert/strict";
import test from "node:test";
import { generateRandomNumbers } from "../lib";


test("Should throw error", () => {
  const passwordLength = 0;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result, []);
});

test("Should return one random number", () => {
  const passwordLength = 1;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result?.length, 1);
});

test("Should return 5 random numbers", () => {
  const passwordLength = 5;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result?.length, 5);
});


