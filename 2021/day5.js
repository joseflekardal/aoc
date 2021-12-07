input
  .split("\n")
  .map((entry) => entry.match(/\d+/g).map(Number))
  .filter((entry) => entry[0] === entry[2] || entry[1] === entry[3]); // task a only

const gridSize = Math.max(...entries.flat()) + 1;

const result = entries
  .reduce(
    (map, [currX, currY, destX, destY]) => {
      while (currX !== destX || currY !== destY) {
        map[currY][currX]++;
        if (currX !== destX) {
          currX < destX ? currX++ : currX--;
        }

        if (currY !== destY) {
          currY < destY ? currY++ : currY--;
        }
      }

      map[currY][currX]++;

      return map;
    },
    new Array(gridSize).fill("").map((row) => new Array(gridSize).fill(0))
  )
  .flat()
  .reduce((tot, cur) => {
    if (cur > 1) tot++;
    return tot;
  }, 0);

console.log(result);
