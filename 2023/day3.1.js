const input = $('pre').innerText.trim().split('\n')
const VALID_ADJACENT = /(\d|\.)/
const locations = []
let total = 0

for (let y = 0; y < input.length; y++) {
  for (const match of input[y].matchAll(/\d+/g)) {
    locations.push({ y, x: match.index, num: match[0] })
  }
}

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

    if (VALID_ADJACENT.test(adj)) {
      continue
    }

    total += parseInt(loc.num)
    break
  }
}

console.log(total)
