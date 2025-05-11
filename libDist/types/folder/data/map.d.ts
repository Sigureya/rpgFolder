import { Data_Map, MapFileInfo, Data_MapInfo } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, PathLib_Resolve } from './detail/libTypes';
import { default as FsLib } from 'node:fs/promises';
import { Dirent } from 'node:fs';
type InfoType = Pick<Data_MapInfo, "name" | "id">;
export declare const isMapFileName: (filename: string) => boolean;
export declare const listupMapFiles: (fsLib: Pick<typeof FsLib, "readdir">, resolvedPath: string) => Promise<Dirent[]>;
export declare const resolveMapFilePath: (pathLib: PathLib_Resolve, basePath: string, mapId: number) => {
    filePath: string;
    fileName: `Map${string}.json`;
};
export type ResultOfReadMapFile = MapFileInfo<Data_Map | undefined>;
export declare const readMapFileFromInfo: (fsLib: FsLib_ReadFile, pathLib: PathLib_Resolve, basePath: string, info: InfoType) => Promise<ResultOfReadMapFile>;
export declare const mappingAllMapFiles: <T>(fsLib: FsLib_ReadFile, pathLib: PathLib_Resolve, basePath: string, fn: (data: ResultOfReadMapFile) => T, infos?: ReadonlyArray<Data_MapInfo | null>) => Promise<Promise<T>[]>;
export {};
