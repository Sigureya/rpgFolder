import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
import { Data_Class } from '@sigureya/rpgtypes';
export declare const ensureClassDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzClassData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, armors: Data_Class[], space?: number) => Promise<void>;
export declare const readRmmzClassData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Class[]>;
