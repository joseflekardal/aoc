const input = process.argv[2]
const map = input.split('\n').map((row) => row.split(''))
const lowPoints = []

function getAdjacentHeights(y, x) {
  const up = map[y - 1]?.[x] ?? Infinity
  const down = map[y + 1]?.[x] ?? Infinity
  const left = map[y][x - 1] ?? Infinity
  const right = map[y][x + 1] ?? Infinity
  return [up, down, right, left]
}

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[y].length; x++) {
    const curHeight = map[y][x]
    const adjacentHeights = getAdjacentHeights(y, x)

    const isLowPoint = adjacentHeights.every((height) => height > curHeight)

    if (isLowPoint) lowPoints.push({ y, x })
  }
}

const MAX_HEIGHT = 9
const basins = lowPoints.map((lowPoint) => {
  let basinCount = 0
  const memo = new Set()

  const positionsToCheck = [lowPoint]
  while (positionsToCheck.length) {
    const { x, y } = positionsToCheck.shift()

    const memoKey = x + ':' + y
    if (memo.has(memoKey)) continue
    memo.add(memoKey)

    const curHeight = map[y]?.[x]
    if (!curHeight || Number(curHeight) >= MAX_HEIGHT) continue

    basinCount++

    positionsToCheck.push(
      { x, y: y - 1 },
      { x, y: y + 1 },
      { y, x: x - 1 },
      { y, x: x + 1 }
    )
  }

  return basinCount
})

const topThreeBasins = basins.sort((a, b) => b - a).slice(0, 3)
const result = topThreeBasins.reduce((a, c) => a * c)

console.log(result)
