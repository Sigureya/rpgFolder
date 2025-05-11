import { Data_State } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureStateDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzStateData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, states: Data_State[], space?: number) => Promise<void>;
export declare const readRmmzStateData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_State[]>;
