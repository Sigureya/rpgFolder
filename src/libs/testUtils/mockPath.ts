import type PathLib from "node:path";
import { vi } from "vitest";

export const makeMockPath = (
  result: {
    [K in keyof typeof PathLib]?: string;
  } = {}
) => ({
  resolve: vi.fn(() => result.resolve ?? ""),
  join: vi.fn(() => result.join ?? ""),
  sep: "/",
  relative: vi.fn(() => result.relative ?? ""),
  basename: vi.fn(() => result.basename ?? ""),
  dirname: vi.fn(() => result.dirname ?? ""),
  extname: vi.fn(() => result.extname ?? ""),
});
