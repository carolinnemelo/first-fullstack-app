import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { passwordGenerator } from "./lib";

test("Should return when imputed zero numbers", () => {
  const amountOfChars = 0;
  const result = passwordGenerator(amountOfChars)
  deepEqual(result, "zero numbers");
});

test("Should return one random number", () => {
    const amountOfChars = 1;
    const result = passwordGenerator(amountOfChars)
    deepEqual(result?.length, 1);
  });