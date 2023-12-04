const lines = $('pre').innerText.trim().split('\n')

const nMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
}

const searchables = Object.keys(nMap)

let total = 0

for (const line of lines) {
  const memo = {}

  for (const search of searchables) {
    const firstIndex = line.indexOf(search)
    const lastIndex = line.lastIndexOf(search)

    for (const index of [firstIndex, lastIndex]) {
      if (index > -1) {
        memo[index] = search
      }
    }
  }

  const memoKeys = Object.keys(memo)
  const firstOccurrence = Math.min(...memoKeys)
  const lastOccurrence = Math.max(...memoKeys)
  const first = nMap[memo[firstOccurrence]]
  const last = nMap[memo[lastOccurrence]]

  const calibrationValue = parseInt(first + last)

  total += calibrationValue
}

console.log(total)
