function getInts(str) {
  return str.split(' ').map(Number)
}

const input = $('pre').innerText.trim().split('\n\n')
const firstLine = input.shift()
const seeds = getInts(firstLine.split('seeds: ')[1])
let minLocation = Infinity
const maps = []

for (const row of input) {
  const [title, ...rows] = row.split('\n')
  const memo = []

  for (const line of rows) {
    const [dest, src, range] = getInts(line)
    memo.push({
      offset: dest - src,
      start: src,
      end: src + range,
    })
  }

  maps.push(memo)
}

// crappy performance!!
while (seeds.length) {
  const start = seeds.shift()
  const rng = seeds.shift()

  for (let i = start; i <= start + rng; i++) {
    let seed = i

    for (const map of maps) {
      for (const line of map) {
        if (seed >= line.start && seed <= line.end) {
          seed += line.offset
          break
        }
      }
    }

    minLocation = Math.min(minLocation, seed)
  }
}

console.log(minLocation)
