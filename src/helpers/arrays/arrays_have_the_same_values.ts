export function arraysHaveSameValues<T>(arr1: T[], arr2: T[]): boolean {
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  if (sortedArr1.length !== sortedArr2.length) {
    return false; // Arrays have different lengths, so they can't have the same values
  }

  return sortedArr1.every((value, index) => value === sortedArr2[index]);
}
