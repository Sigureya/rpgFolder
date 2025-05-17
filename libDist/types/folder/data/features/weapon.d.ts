import { Data_Weapon } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureWeaponDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzWeaponData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, weapons: Data_Weapon[], space?: number) => Promise<void>;
export declare const readRmmzWeaponData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Weapon[]>;
