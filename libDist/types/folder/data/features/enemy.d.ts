import { Data_Enemy } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureEnemyDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzEnemyData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, enemies: Data_Enemy[], space?: number) => Promise<void>;
export declare const readRmmzEnemyData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Enemy[]>;
