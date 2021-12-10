const distanceMemo = {}
function getDistanceCost(distance) {
  if (distanceMemo[distance]) return distanceMemo[distance]

  let total = 0
  for (let i = 0; i < distance; i++) {
    total += i + 1
  }

  distanceMemo[distance] = total

  return total
}

function getCheapestMove(input, getDistanceCost) {
  const crabPositions = input.split(',').map(Number)
  const max = Math.max(...crabPositions)
  const min = Math.min(...crabPositions)

  const maxPossible = (max - min) / 2

  const fuelTotals = []
  for (
    let targetPosition = min;
    targetPosition < maxPossible;
    targetPosition++
  ) {
    const fuelCost = crabPositions.reduce((fuelCost, crabPosition) => {
      const distance = Math.abs(crabPosition - targetPosition)

      return fuelCost + getDistanceCost(distance)
    }, 0)

    fuelTotals.push(fuelCost)
  }

  return Math.min(...fuelTotals)
}

console.time('Part 1')
console.log(
  getCheapestMove(input, (distance) => {
    const fuelPrice = distance
    return fuelPrice
  })
)
console.timeEnd('Part 1')

console.time('Part 2')
console.log(getCheapestMove(input, getDistanceCost))
console.timeEnd('Part 2')
