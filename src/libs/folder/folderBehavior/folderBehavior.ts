export interface BaseFolderBehavior<T> {
  extension: string;
  createEmpty(): T;
}
