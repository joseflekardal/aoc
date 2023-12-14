const [time, distance] = $('pre')
  .innerText.trim()
  .split('\n')
  .map((line) => {
    return line.match(/\d+/g).map(Number)
  })

const winningWays = []

for (let i = 0; i < Math.max(time.length, distance.length); i++) {
  const t = time[i]
  const d = distance[i]
  let winCount = 0

  for (let j = 0; j <= t; j++) {
    const timeToGo = t - j
    if (Math.pow(j, 1) * timeToGo > d) {
      winCount++
    }
  }
  winningWays.push(winCount)
}

let result = winningWays.shift()

for (const num of winningWays) {
  result *= num
}

console.log(result)
