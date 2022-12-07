function solvePuzzle(input) {
	const tree = {}
	const state = new Set()
	const MAX_DIRECTORY_SIZE_FOR_DELETION = 100_000
	let workingDirectory = tree

	for (const row of input.split('\n')) {
		if (row.startsWith('$ cd')) {
			const dir = row.split(' ').at(-1)
			if (dir !== '..') {
				workingDirectory[dir] = {
					'..': dir === '/' ? null : workingDirectory,
					size: 0
				}
			}
			workingDirectory = workingDirectory[dir]
		} else if (/^\d+/.test(row)) {
			let pointer = workingDirectory
			do {
				pointer.size += parseInt(row.split(' ')[0])
				if (pointer.size < MAX_DIRECTORY_SIZE_FOR_DELETION) {
					state.add(pointer)
				} else {
					state.delete(pointer)
				}
				pointer = pointer['..']
			} while (pointer)
		}
	}

	let sum = 0
	state.forEach((directory) => {
		sum += directory.size
	})

	return sum
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
