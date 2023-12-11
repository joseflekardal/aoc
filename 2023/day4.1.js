const cards = $('pre').innerText.trim().split('\n')
let total = 0

for (const card of cards) {
  const rest = card.replace(/Card\s\d+:\s/, '')

  const [winning, mine] = rest.split(' | ').map((x) => {
    return x.match(/\d+/g)
  })

  const ws = new Set(winning)
  const ms = new Set(mine)
  let totalWinning = 0

  ws.forEach((v) => {
    if (ms.has(v)) {
      if (totalWinning) {
        totalWinning *= 2
      } else {
        totalWinning++
      }
    }
  })

  total += totalWinning
}

console.log(total)

// 25010
