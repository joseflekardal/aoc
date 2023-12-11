const cards = $('pre').innerText.trim().split('\n')
let total = 0

const wonCardsList = []

for (const card of cards) {
  const rest = card.replace(/Card\s*\d+:\s/, '')

  const [winning, mine] = rest.split(' | ').map((x) => {
    return x.match(/\d+/g)
  })

  const ws = new Set(winning)
  const ms = new Set(mine)
  let totalWinning = 0

  ws.forEach((v) => {
    if (ms.has(v)) {
      totalWinning++
    }
  })

  const wonCards = wonCardsList.shift() || 0
  const cardTotal = wonCards + 1

  total += cardTotal

  for (let i = 0; i < totalWinning; i++) {
    wonCardsList[i] = (wonCardsList[i] || 0) + cardTotal
  }
}

console.log(total)
