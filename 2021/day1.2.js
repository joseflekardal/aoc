input.split('\n').map(Number)
let total = 0
let prev = 0

for (let i = 0; i < numbers.length; i++) {
  const temp = numbers.slice(i, i + 3).reduce((acc, cur) => acc + cur, 0)
  if (i && temp > prev) {
    total++
  }

  prev = temp
}

console.log(total)
