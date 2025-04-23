import { describe, test, expect } from "vitest";
import { isJsonFile } from "./path";

describe("", () => {
  test("", () => {
    expect(isJsonFile("test.json")).toBe(true);
    expect(isJsonFile("test.txt")).toBe(false);
    expect(isJsonFile("test.JSON")).toBe(true);
    expect(isJsonFile("test.TXT")).toBe(false);
    expect(isJsonFile("test.json.txt")).toBe(false);
    expect(isJsonFile("test.json/")).toBe(false);
    expect(isJsonFile("tsconfig.node.json")).toBe(true);
  });
});
