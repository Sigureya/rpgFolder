import { default as PathLib } from 'node:path';
import { default as FsLib } from 'node:fs/promises';
export type PathLib_Resolve = Pick<typeof PathLib, "resolve" | "sep">;
export type FsLib_ReadFile = Pick<typeof FsLib, "readFile">;
export type FsLib_WriteFile = Pick<typeof FsLib, "writeFile">;
export type FsLib_ReadDir = Pick<typeof FsLib, "readdir">;
