export function solvePuzzle(input) {
  const indexes = []

  for (const [idx, packets] of Object.entries(input.split('\n\n'))) {
    const index = Number(idx) + 1
    const [left, right] = packets.split('\n').map(JSON.parse)

    let currentLeft = left.shift()
    let currentRight = right.shift()

    let leftMemo = []
    let rightMemo = []

    while (true) {
      if ([currentLeft, currentRight].every((x) => Number.isInteger(x))) {
        if (currentLeft < currentRight) {
          indexes.push(index)
          break
        }

        if (currentLeft > currentRight) {
          break
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
      } else if (Array.isArray(currentRight) && Number.isInteger(currentLeft)) {
        currentLeft = [currentLeft]
        continue
      } else if (Array.isArray(currentLeft) && Number.isInteger(currentRight)) {
        currentRight = [currentRight]
        continue
      } else if (currentRight === undefined && currentLeft === undefined) {
        if (!left.length && !right.length) {
          break
        }
      } else if (currentRight === undefined) {
        break
      } else if (currentLeft === undefined) {
        indexes.push(index)
        break
      }

      currentLeft = leftMemo.pop() || left.shift()
      currentRight = rightMemo.pop() || right.shift()
    }
  }

  return indexes.reduce((sum, current) => sum + current, 0)
}

const input = $('pre').innerText.trim()
const result = solvePuzzle(input)
console.log(result)
