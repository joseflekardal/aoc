const gamma = input
  .split('\n')
  .reduce(
    (memo, cur) => {
      memo.forEach((x, i) => x[cur[i]]++)
      return memo
    },
    [...input[0]].map((_) => [0, 0])
  )
  .reduce((acc, cur) => {
    return acc + (cur[0] > cur[1] ? '0' : '1')
  }, '')

const epsilon = [...gamma].reduce(
  (acc, cur) => acc + (cur === '1' ? '0' : '1'),
  ''
)

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
