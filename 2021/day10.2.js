const input = process.argv[2]

const tagMap = { '[': ']', '{': '}', '(': ')', '<': '>' }
const priceMap = { ')': 1, ']': 2, '}': 3, '>': 4 }
const closingTags = new Set(Object.keys(priceMap))
const tagMemo = {}

const scores = input.split('\n').reduce((scores, sequence) => {
  let lastOpening = []

  for (const tag of sequence) {
    if (closingTags.has(tag)) {
      if (tag !== tagMap[lastOpening[0]]) {
        tagMemo[tag] = tagMemo[tag] ? tagMemo[tag] + 1 : 1
        return scores
      } else {
        lastOpening.shift()
      }
    } else {
      lastOpening.unshift(tag)
    }
  }

  scores.push(lastOpening.reduce((a, tag) => a * 5 + priceMap[tagMap[tag]], 0))

  return scores
}, [])

const sortedScores = scores.sort((a, b) => b - a)
const meanScore = sortedScores[Math.floor(scores.length / 2)]

console.log(meanScore)
