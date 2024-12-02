function partOne (input) {
    const rows = input.trim().split('\n')
    
    const leftList = []
    const rightList = []
    
    for (const row of rows) {
        const [left, right] = row.match(/(\d+)\s+(\d+)/).slice(1).map(Number)
        
        leftList.push(left)
        rightList.push(right)
    }
    
    leftList.sort()
    rightList.sort()
    
    
    let total = 0
	leftList.forEach((left, i) => {
        total += Math.abs(left - rightList[i])
    }, 0)

    return total
}

const result = partOne($('pre').innerText)

console.log(`Result is ${result}`)