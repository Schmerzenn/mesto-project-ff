export function sortByDate(arr) {
  return arr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}
