function getInts(str) {
  return str.split(' ').map(Number)
}

const input = $('pre').innerText.trim().split('\n\n')

const firstLine = input.shift()

const seeds = getInts(firstLine.split('seeds: ')[1])

let minLocation = Infinity

for (let seed of seeds) {
  for (const row of input) {
    const [title, ...rows] = row.split('\n')

    for (const line of rows) {
      const [dest, src, range] = getInts(line)

      if (seed >= src && seed <= src + range) {
        seed = seed + (dest - src)
        break
      }
    }
  }

  minLocation = Math.min(minLocation, seed)
}

console.log(minLocation)
