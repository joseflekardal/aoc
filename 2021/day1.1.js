input
  .split("\n")
  .map(Number)
  .reduce((acc, cur, i, arr) => (cur > arr[i - 1] ? acc + 1 : acc), 0);
