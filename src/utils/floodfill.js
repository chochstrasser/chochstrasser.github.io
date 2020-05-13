const floodFillAlgorithm = (list, x, y) => {
  let count = 0;
  let visited = {};
  const floodFill = (list, x, y) => {
    if (!list[x] || !list[x][y]) return;
    if (
      list[x][y] === 0 ||
      (typeof visited[x + "," + y] !== "undefined" && visited[x + "," + y])
    ) {
      return;
    }
    count++;
    visited[x + "," + y] = true;
    floodFill(list, x, y - 1);
    floodFill(list, x, y + 1);
    floodFill(list, x - 1, y);
    floodFill(list, x + 1, y);
    return count;
  };
  const result = floodFill(list, x, y);
  return result || 0;
};

export default floodFillAlgorithm;
