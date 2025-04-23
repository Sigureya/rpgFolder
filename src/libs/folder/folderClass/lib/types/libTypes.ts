import type fsp from "node:fs/promises";
import type pathLib from "node:path";

export interface NodeLibs {
  fs: typeof fsp;
  path: typeof pathLib;
}
