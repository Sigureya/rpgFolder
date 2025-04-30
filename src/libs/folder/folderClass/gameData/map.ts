export const isMapFileName = (fileName: string) => {
  return /Map\d{3}\.json/.test(fileName);
};
