function partOne (input) {
	const rows = input.trim().split('\n')
    
    
	let safeCount = 0

	for (const row of rows) {
		const levels = row.split(/\s+/).map(Number)

		let prev = levels[0]

		let increasing = null
		let isSafe = true

		for (const level of levels.slice(1)) {
			if (increasing === null) {
				increasing = level > prev
			}

			const diff = Math.abs(level - prev)

			if (diff < 1 || diff > 3 || increasing !== level > prev) {
				isSafe = false
				break
			}

			prev = level
    }

		if (isSafe) {
			safeCount++
		}
		
	}


	return safeCount
}

const result = partOne($('pre').innerText)

console.log(`Result is ${result}`)