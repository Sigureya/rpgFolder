import type PathLib from "node:path";
import type FsLib from "node:fs/promises";

export type PathLib_Resolve = Pick<typeof PathLib, "resolve" | "sep">;

export type FsLib_ReadFile = Pick<typeof FsLib, "readFile">;
export type FsLib_WriteFile = Pick<typeof FsLib, "writeFile">;
