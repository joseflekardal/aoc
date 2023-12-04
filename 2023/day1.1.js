const lines = $('pre').innerText.trim().split('\n')
let total = 0

for (const line of lines) {
  let first
  for (let i = 0; i < line.length; i++) {
    const int = parseInt(line[i])

    if (Number.isInteger(int)) {
      first = line[i]
      break
    }
  }

  let last
  for (let i = line.length; i >= 0; i--) {
    const int = parseInt(line[i])

    if (Number.isInteger(int)) {
      last = line[i]
      break
    }
  }

  total += parseInt(first + last)
}

console.log(total)
