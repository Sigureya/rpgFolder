import type PathLib from "node:path";
import FsLib from "node:fs/promises";
import { expect, vi } from "vitest";
import type { Dirent } from "node:fs";

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

interface FSX {
  readFile: string;
  readdir: Dirent[];
}

export const makeMockFs = (result: FSX) => ({
  readFile: vi.fn((path: string, opt: { withFileTypes: boolean }) => {
    expect(opt.withFileTypes).toBe(true);
    return Promise.resolve(result.readFile);
  }),
  readdir: vi.fn(() => Promise.resolve(result.readdir)),
});
