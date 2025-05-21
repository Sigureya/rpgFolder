import { Data_Item } from '@sigureya/rpgtypes';
import { FsLib_ReadFile, FsLib_WriteFile, PathLib_Resolve } from './detail/libTypes';
export declare const ensureItemDataPath: (pathLib: PathLib_Resolve, basePath: string) => string;
export declare const writeRmmzItemData: (pathLib: PathLib_Resolve, fsLib: FsLib_WriteFile, basePath: string, items: Data_Item[], space?: number) => Promise<void>;
export declare const readRmmzItemData: (pathLib: PathLib_Resolve, fsLib: FsLib_ReadFile, basePath: string) => Promise<Data_Item[]>;
