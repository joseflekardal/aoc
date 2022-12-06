function solvePuzzle(input) {
	const [rawStacks, craneInstructions] = input.split('\n\n')

	const stacks = rawStacks
		.split('\n')
		.reverse()
		.reduce((acc, cur, i) => {
			if (i === 0) {
				const stuff = cur.match(/(\d)/g)
				stuff.forEach(x => {
					acc[x] = []
				})
			} else {
				[cur[1], cur[5], cur[9], cur[13], cur[17], cur[21], cur[25], cur[29], cur[33]]
					.forEach((char, i) => {
						if (char.trim()) {
							acc[i + 1].push(char)
						}
					})
			}

			return acc
		}, {})

	for (const craneInstruction of craneInstructions.split('\n')) {
		const result = craneInstruction.match(/(\d+)/g)
		if (!result) {
			continue
		}

		const [count, origin, destination] = result
		const crateCount = parseInt(count)

		const mover = stacks[origin].splice(stacks[origin].length - crateCount, crateCount)

		stacks[destination].push(...mover)
		console.table(stacks)
	}

	const topCrateString = Object.values(stacks).reduce((acc, char) => acc + char.at(-1), '')

	return topCrateString
}


const input = document.querySelector('pre code').innerText
const result = solvePuzzle(input)
console.log(result)