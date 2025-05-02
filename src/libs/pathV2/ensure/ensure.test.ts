import { expect, describe, test } from "vitest";
import { ensurePath } from "./ensure";

import PathLib from "node:path";

const replaceSeparator = (path: string): string => {
  return path.replaceAll(PathLib.sep, "/");
};
describe("ensurePath", () => {
  const expected = "basePath/main/sub" as const;
  const MAIN = "main" as const;
  const SUB = "sub" as const;

  test("should return the correct path when basePath is not empty", () => {
    const result = ensurePath(PathLib, "basePath", MAIN, SUB);
    const r2 = replaceSeparator(result);
    expect(r2).toBe(expected);
  });

  test("", () => {
    const result = ensurePath(PathLib, "basePath/main", MAIN, SUB);
    const r2 = replaceSeparator(result);
    expect(r2).toBe(expected);
  });
  test("", () => {
    const result = ensurePath(PathLib, "basePath/main/sub", MAIN, SUB);
    const r2 = replaceSeparator(result);
    expect(r2).toBe(expected);
  });
  test("", () => {
    const result = ensurePath(PathLib, "basePath/mainmain", MAIN, SUB);
    const r2 = replaceSeparator(result);
    expect(r2).toBe("basePath/mainmain/main/sub");
  });
});
