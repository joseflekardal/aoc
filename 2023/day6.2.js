const [time, distance] = $('pre')
  .innerText.trim()
  .split('\n')
  .map((line) => {
    const numStr = line.match(/\d+/g).reduce((acc, cur) => (acc += cur), '')

    return Number(numStr)
  })

let winCount = 0

for (let i = 0; i <= time; i++) {
  const timeToGo = time - i
  if (Math.pow(i, 1) * timeToGo > distance) {
    winCount++
  }
}

console.log(winCount)
