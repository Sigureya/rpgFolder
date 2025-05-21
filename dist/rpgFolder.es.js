import { FOLDER_DATA, FILENAME_ACTORS, isDataActor, FILENAME_ARMORS, isDataArmor, FILENAME_CLASSES, isDataClass, FILENAME_ENEMIES, isDataEnemy, FILENAME_ITEMS, isDataItem, FILENAME_SKILLS, isDataSkill, FILENAME_STATES, isDataState, FILENAME_WEAPONS, isDataWeapon, FILENAME_TROOPS, FILENAME_COMMON_EVENTS, FILENAME_MAP_INFOS, isDataMapInfo, makeMapData, FILENAME_SYSTEM, SRC_DATA_COMMON_EVNET, SRC_DATA_TROOP, SRC_DATA_WEAPON, SRC_DATA_STATE, SRC_DATA_SKILL, SRC_DATA_ITEMS, SRC_DATA_CLASS, SRC_DATA_ENEMY, SRC_DATA_ARMOR, SRC_DATA_ACTOR, FOLDER_IMG, FOLDER_AUDIO_BGM, FOLDER_AUDIO_BGS, FOLDER_AUDIO_ME, FOLDER_AUDIO_SE, FOLDER_IMG_FACES, FOLDER_IMG_PICTURES, FOLDER_IMG_BATTLEBACK1, FOLDER_IMG_BATTLEBACK2, FOLDER_IMG_CHACTERS, FOLDER_IMG_ENEMIES, FOLDER_IMG_PARALLACES, FOLDER_IMG_SV_ACTORS, FOLDER_IMG_SV_ENEMIES, FOLDER_IMG_SYSTEM, FOLDER_IMG_TILESETS, FOLDER_IMG_TITLES1, FOLDER_IMG_TITLES2, FOLDER_AUDIO } from "@sigureya/rpgtypes";
const denormalizeIdentifiedItems = (items) => {
  return [null, ...items];
};
const ensureDataPath = (pathLib, basePath, fileName) => {
  return basePath.endsWith(`${pathLib.sep}${FOLDER_DATA}`) ? pathLib.resolve(basePath, fileName) : pathLib.resolve(basePath, FOLDER_DATA, fileName);
};
const validateAndFilterItems = (list, fn) => {
  if (Array.isArray(list)) {
    return list.filter((item) => fn(item));
  }
  throw new Error("Invalid data format");
};
const writeDataFile = async (fsLib, path, data, space = 2) => {
  const list = denormalizeIdentifiedItems(data);
  return fsLib.writeFile(path, JSON.stringify(list, null, space), "utf-8");
};
const readRmmzDataListFile = async (fsLib, resolvedPath, validateFn) => {
  const jsonText = await fsLib.readFile(resolvedPath, "utf-8");
  const obj = JSON.parse(jsonText);
  return validateAndFilterItems(obj, validateFn);
};
const ensureActorDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_ACTORS);
};
const writeRmmzActorData = (pathLib, fsLib, basePath, actors, space = 2) => {
  const path = ensureActorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, actors, space);
};
const readRmmzActorData = async (pathLib, fsLib, basePath) => {
  const path = ensureActorDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataActor);
};
const ensureArmorDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_ARMORS);
};
const writeRmmzArmorData = (pathLib, fsLib, basePath, armors, space = 2) => {
  const path = ensureArmorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};
const readRmmzArmorData = async (pathLib, fsLib, basePath) => {
  const path = ensureArmorDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataArmor);
};
const ensureClassDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_CLASSES);
};
const writeRmmzClassData = (pathLib, fsLib, basePath, armors, space = 2) => {
  const path = ensureClassDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};
const readRmmzClassData = async (pathLib, fsLib, basePath) => {
  const path = ensureClassDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataClass);
};
const ensureEnemyDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_ENEMIES);
};
const writeRmmzEnemyData = (pathLib, fsLib, basePath, enemies, space = 2) => {
  const path = ensureEnemyDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, enemies, space);
};
const readRmmzEnemyData = async (pathLib, fsLib, basePath) => {
  const path = ensureEnemyDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataEnemy);
};
const ensureItemDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_ITEMS);
};
const writeRmmzItemData = (pathLib, fsLib, basePath, items, space = 2) => {
  const path = ensureItemDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, items, space);
};
const readRmmzItemData = async (pathLib, fsLib, basePath) => {
  const path = ensureItemDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataItem);
};
const ensureSkillDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_SKILLS);
};
const writeRmmzSkillData = (pathLib, fsLib, basePath, skills, space = 2) => {
  const path = ensureSkillDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, skills, space);
};
const readRmmzSkillData = async (pathLib, fsLib, basePath) => {
  const path = ensureSkillDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataSkill);
};
const ensureStateDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_STATES);
};
const writeRmmzStateData = (pathLib, fsLib, basePath, states, space = 2) => {
  const path = ensureStateDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, states, space);
};
const readRmmzStateData = async (pathLib, fsLib, basePath) => {
  const path = ensureStateDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataState);
};
const ensureWeaponDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_WEAPONS);
};
const writeRmmzWeaponData = (pathLib, fsLib, basePath, weapons, space = 2) => {
  const path = ensureWeaponDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, weapons, space);
};
const readRmmzWeaponData = async (pathLib, fsLib, basePath) => {
  const path = ensureWeaponDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataWeapon);
};
const isDataTroop = (data) => {
  return typeof data === "object" && data !== null && "id" in data && typeof data.id === "number";
};
const ensureTroopDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_TROOPS);
};
const writeRmmzTroopData = (pathLib, fsLib, basePath, troops, space = 2) => {
  const path = ensureTroopDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, troops, space);
};
const readRmmzTroopData = async (pathLib, fsLib, basePath) => {
  const path = ensureTroopDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataTroop);
};
const isCommonEvent = (data) => {
  return !!data && typeof data === "object" && "id" in data;
};
const ensureCommonEventDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_COMMON_EVENTS);
};
const writeRmmzCommonEventData = (pathLib, fsLib, basePath, commonEvents, space = 2) => {
  const path = ensureCommonEventDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, commonEvents, space);
};
const readRmmzCommonEventData = async (pathLib, fsLib, basePath) => {
  const path = ensureCommonEventDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isCommonEvent);
};
const ensureMapInfoDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_MAP_INFOS);
};
const writeRmmzMapInfoData = (pathLib, fsLib, basePath, mapInfos, space = 2) => {
  const path = ensureMapInfoDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, mapInfos, space);
};
const readRmmzMapInfoData = async (pathLib, fsLib, basePath) => {
  const path = ensureMapInfoDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataMapInfo);
};
const isMapFileName = (filename) => {
  return filename.startsWith("Map") && filename.endsWith(".json");
};
const listupMapFiles = async (fsLib, resolvedPath) => {
  return (await fsLib.readdir(resolvedPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isFile() && isMapFileName(dirent.name)
  );
};
const makeMapFileName = (mapId) => {
  return `Map${String(mapId).padStart(3, "0")}.json`;
};
const resolveMapFilePath = (pathLib, basePath, mapId) => {
  const fileName = makeMapFileName(mapId);
  const filePath = pathLib.resolve(basePath, fileName);
  return { filePath, fileName };
};
const validateAndNormalizeMapData = (data) => {
  return makeMapData(data);
};
const readMapFileFromInfo = async (fsLib, pathLib, basePath, info) => {
  const { filePath, fileName } = resolveMapFilePath(pathLib, basePath, info.id);
  try {
    const text = await fsLib.readFile(filePath, "utf-8");
    const mapData = validateAndNormalizeMapData(JSON.parse(text));
    return {
      filename: fileName,
      map: mapData,
      editingName: info.name
    };
  } catch {
    return {
      filename: fileName,
      editingName: info.name,
      map: void 0
    };
  }
};
const mappingAllMapFiles = async (fsLib, pathLib, basePath, fn, infos) => {
  const list = infos ?? await readRmmzMapInfoData(pathLib, fsLib, basePath);
  return list.filter((item) => !!item && isDataMapInfo(item)).map(async (info) => {
    const mapFileInfo = await readMapFileFromInfo(
      fsLib,
      pathLib,
      basePath,
      info
    );
    return fn(mapFileInfo);
  });
};
const isDataSystem = (data) => {
  return !!data;
};
const ensureSystemDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, FILENAME_SYSTEM);
};
const writeRmmzSystemData = (pathLib, fsLib, basePath, system, space = 2) => {
  const path = ensureSystemDataPath(pathLib, basePath);
  const text = JSON.stringify(system, null, space);
  return fsLib.writeFile(path, text, "utf8");
};
const readRmmzSystemData = async (pathLib, fsLib, basePath) => {
  const path = ensureSystemDataPath(pathLib, basePath);
  const text = await fsLib.readFile(path, "utf8");
  const data = JSON.parse(text);
  if (!isDataSystem(data)) {
    throw new Error(`Invalid system data: ${path}`);
  }
  return data;
};
const dispatchHandlers = async (fsLib, pathLib, basePath, dataMapper) => {
  return {
    actor: dataMapper.actor ? dataMapper.actor(
      await readRmmzActorData(pathLib, fsLib, basePath),
      SRC_DATA_ACTOR
    ) : void 0,
    armor: dataMapper.armor ? dataMapper.armor(
      await readRmmzArmorData(pathLib, fsLib, basePath),
      SRC_DATA_ARMOR
    ) : void 0,
    enemy: dataMapper.enemy ? dataMapper.enemy(
      await readRmmzEnemyData(pathLib, fsLib, basePath),
      SRC_DATA_ENEMY
    ) : void 0,
    class: dataMapper.class ? dataMapper.class(
      await readRmmzClassData(pathLib, fsLib, basePath),
      SRC_DATA_CLASS
    ) : void 0,
    item: dataMapper.item ? dataMapper.item(
      await readRmmzItemData(pathLib, fsLib, basePath),
      SRC_DATA_ITEMS
    ) : void 0,
    skill: dataMapper.skill ? dataMapper.skill(
      await readRmmzSkillData(pathLib, fsLib, basePath),
      SRC_DATA_SKILL
    ) : void 0,
    state: dataMapper.state ? dataMapper.state(
      await readRmmzStateData(pathLib, fsLib, basePath),
      SRC_DATA_STATE
    ) : void 0,
    weapon: dataMapper.weapon ? dataMapper.weapon(
      await readRmmzWeaponData(pathLib, fsLib, basePath),
      SRC_DATA_WEAPON
    ) : void 0,
    troop: dataMapper.troop ? dataMapper.troop(
      await readRmmzTroopData(pathLib, fsLib, basePath),
      SRC_DATA_TROOP
    ) : void 0,
    commonEvent: dataMapper.commonEvent ? dataMapper.commonEvent(
      await readRmmzCommonEventData(pathLib, fsLib, basePath),
      SRC_DATA_COMMON_EVNET
    ) : void 0
  };
};
const ggg = (fm) => {
  try {
    return fm();
  } catch {
    return Promise.resolve();
  }
};
const writeDataFiles = async (fsLib, pathLib, basePath, data) => {
  return Promise.all([
    ggg(() => writeRmmzActorData(pathLib, fsLib, basePath, data.actors)),
    ggg(() => writeRmmzEnemyData(pathLib, fsLib, basePath, data.enemies)),
    ggg(() => writeRmmzArmorData(pathLib, fsLib, basePath, data.armors)),
    ggg(() => writeRmmzWeaponData(pathLib, fsLib, basePath, data.weapons)),
    ggg(() => writeRmmzClassData(pathLib, fsLib, basePath, data.classes)),
    ggg(() => writeRmmzItemData(pathLib, fsLib, basePath, data.items)),
    ggg(() => writeRmmzSkillData(pathLib, fsLib, basePath, data.skills)),
    ggg(() => writeRmmzStateData(pathLib, fsLib, basePath, data.states))
  ]);
};
const ensurePath = (pathLib, basePath, folderName, subFolderName) => {
  const normalizedBasePath = pathLib.normalize(basePath);
  if (normalizedBasePath.endsWith(`${pathLib.sep}${folderName}`)) {
    return pathLib.resolve(normalizedBasePath, subFolderName);
  }
  if (normalizedBasePath.endsWith(
    `${pathLib.sep}${folderName}${pathLib.sep}${subFolderName}`
  )) {
    return normalizedBasePath;
  }
  return pathLib.resolve(basePath, folderName, subFolderName);
};
const validateFilePath = (filePath) => {
  return !filePath.includes(".");
};
const buildAssetPath = (pathLib, basePath, assetType, subFolder, filePath, extension) => {
  if (!validateFilePath(filePath)) {
    throw new Error(`Invalid file path: ${filePath}`);
  }
  const dir = ensurePath(pathLib, basePath, assetType, subFolder);
  return pathLib.join(dir, `${filePath}.${extension}`);
};
const buildImageAssetPath = (pathLib, basePath, subFolderName, filePath) => {
  return buildAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG,
    subFolderName,
    filePath,
    "png"
  );
};
const buildBgmPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_BGM, filePath);
};
const buildBgsPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_BGS, filePath);
};
const buildMePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_ME, filePath);
};
const buildSePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_SE, filePath);
};
const buildFaceImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_FACES, filePath);
};
const buildPicturesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_PICTURES, filePath);
};
const buildBattleback1Path = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_BATTLEBACK1,
    filePath
  );
};
const buildBattleback2Path = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_BATTLEBACK2,
    filePath
  );
};
const buildCharactersImagePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_CHACTERS, filePath);
};
const buildEnemyImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_ENEMIES, filePath);
};
const buildParallacesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_PARALLACES,
    filePath
  );
};
const buildSideViewActorsPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_SV_ACTORS, filePath);
};
const buildSideVewEnemiesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_SV_ENEMIES,
    filePath
  );
};
const buildSystemImagePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_SYSTEM, filePath);
};
const buildTilesetImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TILESETS, filePath);
};
const buildTitle1ImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TITLES1, filePath);
};
const buildTitle2ImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TITLES2, filePath);
};
const AUDIO_FOLDES = [
  FOLDER_AUDIO_BGM,
  FOLDER_AUDIO_BGS,
  FOLDER_AUDIO_ME,
  FOLDER_AUDIO_SE
];
const IMAGE_FOLDERS = [
  FOLDER_IMG_FACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2
];
const makeFolder = (pathLib, fsLib, basePath, folderName, subFolderName) => {
  const path = ensurePath(pathLib, basePath, folderName, subFolderName);
  return fsLib.mkdir(path, {
    recursive: true
  });
};
const makeImageFolders = (pathLib, fsLib, basePath) => {
  return IMAGE_FOLDERS.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, FOLDER_IMG, folder);
  });
};
const makeAudioFolders = (pathLib, fsLib, basePath) => {
  return AUDIO_FOLDES.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, FOLDER_IMG, folder);
  });
};
const makeDataFoldes = (pathLib, fsLib, basePath) => {
  return [makeFolder(pathLib, fsLib, basePath, FOLDER_DATA, "")];
};
const isValidAssetPath = (path) => {
  if (path === "") {
    return true;
  }
  if (path.endsWith("/")) {
    return false;
  }
  if (hasInvalidChars(path)) {
    return false;
  }
  if (testWindowsReserved(path)) {
    return false;
  }
  return true;
};
const invalidWindowsNames = [
  "con",
  "prn",
  "aux",
  "nul",
  "com1",
  "com2",
  "com3",
  "com4",
  "com5",
  "com6",
  "com7",
  "com8",
  "com9",
  "lpt1",
  "lpt2",
  "lpt3",
  "lpt4",
  "lpt5",
  "lpt6",
  "lpt7",
  "lpt8",
  "lpt9"
];
const hasInvalidChars = (path) => {
  return /[.#\\]/.test(path);
};
const testWindowsReserved = (path) => {
  const segments = path.split("/");
  return segments.some(
    (segment) => invalidWindowsNames.includes(segment.toLowerCase())
  );
};
const listupImageFiles = async (pathLib, fsLib, basePath, subFolderName) => {
  const dirPath = ensurePath(pathLib, basePath, FOLDER_IMG, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isImageDirent);
};
const areExtention = (dirent, ext) => {
  return dirent.name.endsWith(ext);
};
const isAudioFileExtension = (dirent) => {
  return areExtention(dirent, ".ogg") || areExtention(dirent, ".m4a");
};
const isImageFileExtension = (dirent) => {
  return areExtention(dirent, ".png");
};
const isImageDirent = (dirent) => {
  return dirent.isFile() && isImageFileExtension(dirent);
};
const isAudioDirent = (dirent) => {
  return dirent.isFile() && isAudioFileExtension(dirent);
};
const listupAudioFiles = async (pathLib, fsLib, basePath, subFolderName) => {
  const dirPath = ensurePath(pathLib, basePath, FOLDER_AUDIO, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isAudioDirent);
};
export {
  buildBattleback1Path,
  buildBattleback2Path,
  buildBgmPath,
  buildBgsPath,
  buildCharactersImagePath,
  buildEnemyImagesPath,
  buildFaceImagesPath,
  buildMePath,
  buildParallacesPath,
  buildPicturesPath,
  buildSePath,
  buildSideVewEnemiesPath,
  buildSideViewActorsPath,
  buildSystemImagePath,
  buildTilesetImagesPath,
  buildTitle1ImagesPath,
  buildTitle2ImagesPath,
  dispatchHandlers,
  ensureActorDataPath,
  ensureArmorDataPath,
  ensureClassDataPath,
  ensureCommonEventDataPath,
  ensureEnemyDataPath,
  ensureItemDataPath,
  ensureMapInfoDataPath,
  ensureSkillDataPath,
  ensureStateDataPath,
  ensureSystemDataPath,
  ensureTroopDataPath,
  ensureWeaponDataPath,
  isAudioDirent,
  isAudioFileExtension,
  isImageDirent,
  isImageFileExtension,
  isMapFileName,
  isValidAssetPath,
  listupAudioFiles,
  listupImageFiles,
  listupMapFiles,
  makeAudioFolders,
  makeDataFoldes,
  makeImageFolders,
  mappingAllMapFiles,
  readMapFileFromInfo,
  readRmmzActorData,
  readRmmzArmorData,
  readRmmzClassData,
  readRmmzCommonEventData,
  readRmmzEnemyData,
  readRmmzItemData,
  readRmmzMapInfoData,
  readRmmzSkillData,
  readRmmzStateData,
  readRmmzSystemData,
  readRmmzTroopData,
  readRmmzWeaponData,
  resolveMapFilePath,
  writeDataFiles,
  writeRmmzActorData,
  writeRmmzArmorData,
  writeRmmzClassData,
  writeRmmzCommonEventData,
  writeRmmzEnemyData,
  writeRmmzItemData,
  writeRmmzMapInfoData,
  writeRmmzSkillData,
  writeRmmzStateData,
  writeRmmzSystemData,
  writeRmmzTroopData,
  writeRmmzWeaponData
};
//# sourceMappingURL=rpgFolder.es.js.map
