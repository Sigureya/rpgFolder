export const isValidAssetPath = (path: string): boolean => {
  // 空文字列は有効
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

  // 有効なパス
  return true;
};

const invalidWindowsNames: ReadonlyArray<string> = [
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
  "lpt9",
];

const hasInvalidChars = (path: string): boolean => {
  return /[.#\\]/.test(path);
};

const testWindowsReserved = (path: string): boolean => {
  // Windowsの予約ファイル名を防ぐ
  const segments = path.split("/");
  return segments.some((segment) =>
    invalidWindowsNames.includes(segment.toLowerCase())
  );
};
