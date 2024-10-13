import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { buildPassword } from "../lib";

test("Should return message zero letters", () => {
  const passwordLength = 0;
  const result = buildPassword(passwordLength);
  deepEqual(result, "zero letters");
});

test("Should return one random letter", () => {
  const passwordLength = 1;
  const result = buildPassword(passwordLength);
  deepEqual(result?.length, 1);
});

test("Should return 5 random letters", () => {
  const passwordLength = 5;
  const result = buildPassword(passwordLength);
  deepEqual(result?.length, 5);
});

