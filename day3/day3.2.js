const paths = require('./day3.json')

// const paths = ['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83']
// const paths = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7']

function calcDistances (path) {
  const results = {}
  const pos = { x: 0, y: 0 }
  let totalDistance = 0

  const operations = {
    R: () => pos.x++,
    L: () => pos.x--,
    U: () => pos.y++,
    D: () => pos.y--
  }

  for (const instruction of path.split(',')) {
    const [direction] = instruction
    const distance = instruction.slice(1)

    for (let i = 0; i < parseInt(distance, 10); i++) {
      operations[direction]()

      const key = [pos.x, pos.y].join(',')

      if (!results[key]) {
        results[key] = totalDistance
      }

      totalDistance++
    }
  }

  return results
}

console.time()

const [wireA, wireB] = paths.map(calcDistances)

const bWireSet = new Set(Object.keys(wireB))

const [result] = Object.keys(wireA)
  .filter(r => bWireSet.has(r))
  .map(k => wireA[k] + wireB[k] + 2)
  .sort((a, b) => a > b ? 1 : -1)

console.log(result)
console.timeEnd()
