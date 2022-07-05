// The number 1 is for land and the number 0 is for watre
const arr: string[][] = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

function islandPerimeter(grid: string[][]): number {
  let result: number = 0;
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        if (grid[i - 1]) {
          if (grid[i - 1][j - 1] !== "1") {
            // console.log(grid[i - 1][j - 1]);
            result += 1;
          }
        }
      }
    }
    // console.log("//////////");
  }

  console.log(result);
  return result;
}

islandPerimeter(arr);
