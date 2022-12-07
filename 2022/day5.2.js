function solvePuzzle(input) {
	const [rawStacks, craneInstructions] = input.split('\n\n')
	const [head, ...tail] = rawStacks
		.split('\n')
		.reverse()

	const stacks = []
	for (const [index, stackName] of Object.entries(head)) {
		if (stackName.trim()) {
			stacks[stackName] = []

			for (const row of tail) {
				if (row[index].trim()) {
					stacks[stackName].push(row[index])
				}
			}
		}
	}

	for (const craneInstruction of craneInstructions.trim().split('\n')) {
		const [count, origin, destination] = craneInstruction.match(/(\d+)/g)

		const crateCount = parseInt(count)

		const mover = stacks[origin].splice(stacks[origin].length - crateCount, crateCount)

		stacks[destination].push(...mover)
	}

	const topCrateString = Object
		.values(stacks)
		.reduce((acc, char) => acc + char.at(-1), '')

	return topCrateString
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
