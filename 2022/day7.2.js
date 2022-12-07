function solvePuzzle(input) {
	const STORAGE_CAPACITY = 70_000_000
	const UPDATE_SPACE = 30_000_000
	const tree = {}
	const state = new Set()
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
				state.add(pointer)
				pointer = pointer['..']
			} while (pointer)
		}
	}

	let smallestPossibleSpace = tree['/'].size
	const requiredUnusedSpace = UPDATE_SPACE - (STORAGE_CAPACITY - tree['/'].size)
	state.forEach(directory => {
		if (directory.size > requiredUnusedSpace && directory.size < smallestPossibleSpace) {
			smallestPossibleSpace = directory.size
		}
	})

	return smallestPossibleSpace
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(smallestPossibleSpace)
