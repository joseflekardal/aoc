function partTwo (input) {
    const rows = input.trim().split('\n')

    let total = 0

    const memo = new Map()

    const leftList = []

    for (const row of rows) {
        const [left, right] = row.match(/(\d+)\s+(\d+)/).slice(1)

        memo.set(right, (memo.get(right) || 0) + 1)
        leftList.push(left)
    }

    for (const left of leftList) {
        total += Number(left) * (memo.get(left) || 0)
    }


    return total
}

const result = partTwo($('pre').innerText)

console.log(`Result is ${result}`)