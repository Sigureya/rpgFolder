import { FsLib_WriteFile, PathLib_Resolve } from './data/features/detail/libTypes';
import { DataTable } from './data/features/types';
export declare const writeDataFiles: (fsLib: FsLib_WriteFile, pathLib: PathLib_Resolve, basePath: string, data: DataTable) => Promise<void[]>;
