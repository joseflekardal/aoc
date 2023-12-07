const input = $('pre').innerText.trim().split('\n')
const GEAR_CONNECTOR = '*'
const locations = []

for (let y = 0; y < input.length; y++) {
  for (const match of input[y].matchAll(/\d+/g)) {
    locations.push({ y, x: match.index, num: match[0] })
  }
}

const memo = {}
for (const loc of locations) {
  // left and right prefilled
  const surroundings = [
    [loc.y, loc.x - 1],
    [loc.y, loc.x + loc.num.length],
  ]

  for (let x = loc.x - 1; x < loc.x + loc.num.length + 1; x++) {
    surroundings.push([loc.y - 1, x])
    surroundings.push([loc.y + 1, x])
  }

  for ([adjY, adjX] of surroundings) {
    const adj = input[adjY]?.[adjX] || '.'

    if (adj === GEAR_CONNECTOR) {
      const key = adjY + ':' + adjX
      memo[key] = memo[key] || []
      memo[key].push(parseInt(loc.num))
      break
    }
  }
}

let total = 0
for (const parts of Object.values(memo)) {
  if (parts.length > 1) {
    const gearRatio = parts[0] * parts[1]
    total += gearRatio
  }
}

console.log(total)
