import {
  writeRmmzActorData,
  writeRmmzEnemyData,
  writeRmmzArmorData,
  writeRmmzWeaponData,
  writeRmmzClassData,
  writeRmmzItemData,
  writeRmmzSkillData,
  writeRmmzStateData,
} from "./data/features";
import type {
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./data/features/detail/libTypes";
import type { DataTable } from "./data/features/types";

const ggg = (fm: () => Promise<void>) => {
  try {
    return fm();
  } catch {
    return Promise.resolve();
  }
};

export const writeDataFiles = async (
  fsLib: FsLib_WriteFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  data: DataTable
): Promise<void[]> => {
  return Promise.all([
    ggg(() => writeRmmzActorData(pathLib, fsLib, basePath, data.actors)),
    ggg(() => writeRmmzEnemyData(pathLib, fsLib, basePath, data.enemies)),
    ggg(() => writeRmmzArmorData(pathLib, fsLib, basePath, data.armors)),
    ggg(() => writeRmmzWeaponData(pathLib, fsLib, basePath, data.weapons)),
    ggg(() => writeRmmzClassData(pathLib, fsLib, basePath, data.classes)),
    ggg(() => writeRmmzItemData(pathLib, fsLib, basePath, data.items)),
    ggg(() => writeRmmzSkillData(pathLib, fsLib, basePath, data.skills)),
    ggg(() => writeRmmzStateData(pathLib, fsLib, basePath, data.states)),
  ]);
};
