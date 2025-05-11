import { Dirent } from 'node:fs';
import { default as PathLib } from 'node:path';
import { default as FsLib } from 'node:fs/promises';
export declare const imageFiles: (pathLib: Pick<typeof PathLib, "resolve">, fsLib: Pick<typeof FsLib, "readdir">, basePath: string, subFolder: string) => Promise<Dirent[]>;
export declare const imageFolderPath: (pathLib: Pick<typeof PathLib, "resolve">, basePath: string, subFolder: string) => string;
