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
							console.log(char)
							acc[i + 1].push(char)
						}
					})
			}

			return acc
		}, {})

	for (const craneInstruction of craneInstructions.split('\n')) {
		const result = craneInstruction.match(/(\d+)/g)
		if (result) {
			const [crateCount, origin, destination] = result
			const c = parseInt(crateCount)
			for (let i = 0; i < c; i++) {
				const mover = stacks[origin].pop()
				stacks[destination].push(mover)
			}
		}
	}

	 const topCrateString = Object.values(stacks).reduce((acc, char) => acc + char.at(-1), '')
	 return topCrateString
}

const input = document.querySelector('pre')
const result = solvePuzzle(input)
console.log(result)
