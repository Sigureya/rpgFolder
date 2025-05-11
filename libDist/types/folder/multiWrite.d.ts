import { FsLib_WriteFile, PathLib_Resolve } from './data/detail/libTypes';
import { DataTable } from './data/types';
export declare const writeDataFiles: (fsLib: FsLib_WriteFile, pathLib: PathLib_Resolve, basePath: string, data: DataTable) => Promise<void[]>;
