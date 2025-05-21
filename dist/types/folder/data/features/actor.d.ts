import { Data_Actor } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureActorDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzActorData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, actors: Data_Actor[], space?: number) => Promise<void>;
export declare const readRmmzActorData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Actor[]>;
