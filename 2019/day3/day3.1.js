const input = process.argv[2]
const paths = input.split('\n')

// const paths = ['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83']
// const paths = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7']

function makeArray(length, fill) {
  return Array.from({ length }).fill(fill.split(',').map((x) => parseInt(x)))
}

const operations = {
  U: (distance, pos) =>
    makeArray(distance, pos).map(([x, y], i) => x + ',' + (y + i + 1)),
  D: (distance, pos) =>
    makeArray(distance, pos).map(([x, y], i) => x + ',' + (y - i - 1)),
  R: (distance, pos) =>
    makeArray(distance, pos).map(([x, y], i) => x + i + 1 + ',' + y),
  L: (distance, pos) =>
    makeArray(distance, pos).map(([x, y], i) => x - i - 1 + ',' + y),
}

console.time()

const [points1, points2] = paths.map((path) => {
  const points = path.split(',').reduce((acc, instruction) => {
    const lastPos = acc[acc.length - 1]
    const [direction] = instruction
    return [
      ...acc,
      ...operations[direction](
        parseInt(instruction.slice(1)),
        lastPos || '0,0'
      ),
    ]
  }, [])
  return new Set(points)
})

const [closestPoint] = [...points1]
  .filter((point) => points2.has(point))
  .map((point) => point.split(',').map((x) => Math.abs(parseInt(x))))
  .sort(([ax, ay], [bx, by]) => (ax + ay > bx + by ? 1 : -1))

console.log(closestPoint[0] + closestPoint[1])

console.timeEnd()
