const pos = `forward 5
down 5
forward 8
up 3
down 8
forward 2`
  .split('\n')
  .reduce(
    (acc, cur) => {
      const [dir, distance] = cur.split(' ')
      if (dir === 'forward') {
        acc.x += Number(distance)
      } else if (dir === 'down') {
        acc.y += Number(distance)
      } else {
        acc.y -= Number(distance)
      }

      return acc
    },
    { x: 0, y: 0 }
  )

console.log(pos.y * pos.x)
