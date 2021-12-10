input.split('\n').reduce(
  (acc, cur) => {
    const [dir, distance] = cur.split(' ')
    if (dir === 'forward') {
      acc.x += Number(distance)
      acc.y += Number(distance * acc.aim)
    } else if (dir === 'down') {
      acc.aim += Number(distance)
    } else {
      acc.aim -= Number(distance)
    }

    return acc
  },
  { x: 0, y: 0, aim: 0 }
)

console.log(pos.y * pos.x)
