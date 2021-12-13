const input = process.argv[2]

const grid = input.split('\n').map((row) => {
  return Array.from(row).map(Number)
})

const OCTOPUS_COUNT = grid.flat().length
let allFlashed = false
let step = 0

while (!allFlashed) {
  step++
  const flashed = []

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      grid[y][x]++
      if (grid[y][x] > 9) {
        flashed.push([y, x])
      }
    }
  }

  const flashedOctoMemo = flashed.reduce((memo, pos) => {
    const positionsToCheck = [pos]

    while (positionsToCheck.length) {
      const [y, x] = positionsToCheck.pop()
      const gridValue = grid[y]?.[x]

      if (!gridValue) {
        continue
      }

      grid[y][x]++

      const memoKey = [y, x].join(':')
      if (!memo.has(memoKey) && grid[y][x] > 9) {
        memo.add(memoKey)
        grid[y][x] = 0

        positionsToCheck.push(
          [y + 1, x],
          [y - 1, x],
          [y, x - 1],
          [y, x + 1],
          [y - 1, x - 1],
          [y + 1, x + 1],
          [y - 1, x + 1],
          [y + 1, x - 1]
        )
        continue
      }
    }

    return memo
  }, new Set())

  allFlashed = flashedOctoMemo.size === OCTOPUS_COUNT
}

console.log(step)
