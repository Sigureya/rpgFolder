import { default as PathLib } from 'node:path';
import { default as FsLib } from 'node:fs/promises';
import { DataMapper } from './data/types';
type FsLib_ReadFile = Pick<typeof FsLib, "readFile">;
type PathLib_Resolve = Pick<typeof PathLib, "resolve" | "sep">;
export declare const dispatchHandlers: <T>(fsLib: FsLib_ReadFile, pathLib: PathLib_Resolve, basePath: string, dataMapper: Partial<DataMapper<T>>) => Promise<Record<keyof DataMapper<T>, T | undefined>>;
export {};
