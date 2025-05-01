import type PathLib from "node:path";
import type { MockedFunction } from "vitest";
import { vi } from "vitest";

export const makeMockPath = (
  mockedPath: string
): {
  resolve: MockedFunction<typeof PathLib.resolve>;
  sep: string;
} => ({
  resolve: vi.fn(() => mockedPath),
  sep: "/",
});
