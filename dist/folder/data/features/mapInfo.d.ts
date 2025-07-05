import { Data_MapInfo } from '@sigureya/rpgtypes';
import { PathLib_Resolve, FsLib_WriteFile, FsLib_ReadFile } from './detail/libTypes';
export declare const ensureMapInfoDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzMapInfoData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, mapInfos: Data_MapInfo[], space?: number) => Promise<void>;
export declare const readRmmzMapInfoData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_MapInfo[]>;
