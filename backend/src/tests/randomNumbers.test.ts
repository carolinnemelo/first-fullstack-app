import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { generateRandomNumbers } from "../lib";

test.skip("Should return message when imputed zero numbers", () => {
  const passwordLength = 0;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result, "zero numbers");
});

test.skip("Should return one random number", () => {
  const passwordLength = 1;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result?.length, 1);
});

test.skip("Should return 5 random numbers", () => {
  const passwordLength = 5;
  const result = generateRandomNumbers(passwordLength);
  deepEqual(result?.length, 5);
});


