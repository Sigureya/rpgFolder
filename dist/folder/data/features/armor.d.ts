import { Data_Armor } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureArmorDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzArmorData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, armors: Data_Armor[], space?: number) => Promise<void>;
export declare const readRmmzArmorData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Armor[]>;
