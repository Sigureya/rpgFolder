import { Data_Skill } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureSkillDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzSkillData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, skills: Data_Skill[], space?: number) => Promise<void>;
export declare const readRmmzSkillData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Skill[]>;
