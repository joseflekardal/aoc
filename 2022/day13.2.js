const DIVIDER_PACKETS = ['[[2]]', '[[6]]']
const SEPARATOR = '\n'

function solvePuzzle(input) {
  const allPackets = input + SEPARATOR + DIVIDER_PACKETS.join(SEPARATOR)

  const orderedPackets = allPackets
    .split(SEPARATOR)
    .filter(Boolean)
    .sort((a, b) => {
      const left = JSON.parse(a)
      const right = JSON.parse(b)
      let currentLeft = left.shift()
      let currentRight = right.shift()

      let leftMemo = []
      let rightMemo = []

      while (true) {
        if ([currentLeft, currentRight].every((x) => Number.isInteger(x))) {
          if (currentLeft < currentRight) {
            return -1
          }

          if (currentLeft > currentRight) {
            return 1
          }
        } else if ([currentLeft, currentRight].every((x) => Array.isArray(x))) {
          const nextLeft = currentLeft.shift()
          const nextRight = currentRight.shift()

          if ([currentLeft, currentRight].some((val) => val.length > 0)) {
            leftMemo.push(currentLeft)
            rightMemo.push(currentRight)
          }
          currentLeft = nextLeft
          currentRight = nextRight
          continue
        } else if (
          Array.isArray(currentRight) &&
          Number.isInteger(currentLeft)
        ) {
          currentLeft = [currentLeft]
          continue
        } else if (
          Array.isArray(currentLeft) &&
          Number.isInteger(currentRight)
        ) {
          currentRight = [currentRight]
          continue
        } else if (currentRight === undefined && currentLeft === undefined) {
          if (!left.length && !right.length) {
            return 1
          }
        } else if (currentRight === undefined) {
          return 1
        } else if (currentLeft === undefined) {
          return -1
        }

        currentLeft = leftMemo.pop() || left.shift()
        currentRight = rightMemo.pop() || right.shift()
      }
    })

  console.log(orderedPackets)

  const decoderKey = DIVIDER_PACKETS.reduce((acc, cur) => {
    const index1 = orderedPackets.indexOf(acc) + 1
    const index2 = orderedPackets.indexOf(cur) + 1
    return index1 * index2
  })

  return decoderKey
}

const input = $('pre').innerText.trim()
const result = solvePuzzle(input)

console.log(result)
