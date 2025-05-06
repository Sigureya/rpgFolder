import type { IdentifiedItems } from "@sigureya/rpgtypes";

export const normalizeIdentifiedItems = <T>(items: IdentifiedItems<T>): T[] => {
  return items.filter((item): item is T => item !== null);
};

export const denormalizeIdentifiedItems = <T>(
  items: T[]
): IdentifiedItems<T> => {
  return [null, ...items];
};
