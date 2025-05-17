import { Data_CommonEvent } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureCommonEventDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzCommonEventData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, commonEvents: Data_CommonEvent[], space?: number) => Promise<void>;
export declare const readRmmzCommonEventData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_CommonEvent[]>;
