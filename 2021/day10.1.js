const input = process.argv[2]

const tagMap = { '[': ']', '{': '}', '(': ')', '<': '>' }
const prices = { ')': 3, ']': 57, '}': 1197, '>': 25137 }
const closingTags = new Set(Object.keys(prices))
const tagMemo = {}

for (const sequence of input.split('\n')) {
  let lastOpening = []

  for (const tag of sequence) {
    if (closingTags.has(tag)) {
      if (tag !== tagMap[lastOpening[0]]) {
        tagMemo[tag] = tagMemo[tag] ? tagMemo[tag] + 1 : 1
        break
      } else {
        lastOpening.shift()
      }
    } else {
      lastOpening.unshift(tag)
    }
  }
}

const result = Object.entries(tagMemo).reduce(
  (tot, [tag, count]) => tot + prices[tag] * count,
  0
)

console.log(result)
