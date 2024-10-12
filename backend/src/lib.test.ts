import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { passwordGenerator } from "./lib";

test("Should throw error when imputed zero numbers", () => {
  const amountOfChars = 0;
  const result = passwordGenerator(amountOfChars)
  deepEqual(result, "zero numbers");
});
