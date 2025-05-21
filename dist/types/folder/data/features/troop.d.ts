import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
import { Data_Troop } from '@sigureya/rpgtypes';
export declare const ensureTroopDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzTroopData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, troops: Data_Troop[], space?: number) => Promise<void>;
export declare const readRmmzTroopData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Troop[]>;
