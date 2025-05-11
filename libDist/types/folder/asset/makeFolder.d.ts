import { default as PathLib } from 'node:path';
import { default as FsLib } from 'node:fs/promises';
export declare const makeImageFolders: (pathLib: typeof PathLib, fsLib: typeof FsLib, basePath: string) => Promise<string | undefined>[];
export declare const makeAudioFolders: (pathLib: typeof PathLib, fsLib: typeof FsLib, basePath: string) => Promise<string | undefined>[];
export declare const makeDataFoldes: (pathLib: typeof PathLib, fsLib: typeof FsLib, basePath: string) => Promise<string | undefined>[];
