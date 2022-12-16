function solvePuzzle(input) {
	const forrest = input.split('\n')

	const memo = new Set()

	// left to right
	for (let y = 0; y < forrest.length; y++) {
		let tallest = 0
		for (let x = 0; x < forrest[y].length; x++) {
			const currentTreeHeight = Number(forrest[y][x])

			if (
				currentTreeHeight > tallest
				|| y === 0
				|| x === 0
				|| x === forrest[y].length - 1
				|| y === forrest.length - 1
			) {
				memo.add(y + ':' + x)
			}

			tallest = Math.max(tallest, currentTreeHeight)
		}
	}

	// right to left
	for (let y = forrest.length - 1; y >= 0; y--) {
		let tallest = 0
		for (let x = forrest[y].length - 1; x >= 0; x--) {
			const currentTreeHeight = Number(forrest[y][x])

			if (
				currentTreeHeight > tallest
				|| y === 0
				|| x === 0
				|| x === forrest[y].length - 1
				|| y === forrest.length - 1
			) {
				memo.add(y + ':' + x)
			}

			tallest = Math.max(tallest, currentTreeHeight)
		}
	}


	// top down
	for (let y = 0; y < forrest.length; y++) {
		let tallest = 0
		for (let x = 0; x < forrest[y].length; x++) {
			const currentTreeHeight = Number(forrest[x][y])

			if (
				currentTreeHeight > tallest
				|| y === 0
				|| x === 0
				|| x === forrest[x].length - 1
				|| y === forrest.length - 1
			) {
				memo.add(x + ':' + y)
			}

			tallest = Math.max(tallest, currentTreeHeight)
		}
	}

	// bottom up
	for (let y = forrest.length - 1; y >= 0; y--) {
		let tallest = 0
		for (let x = forrest[y].length - 1; x >= 0; x--) {
			const currentTreeHeight = Number(forrest[x][y])

			if (
				currentTreeHeight > tallest
				|| y === 0
				|| x === 0
				|| x === forrest[x].length - 1
				|| y === forrest.length - 1
			) {
				memo.add(x + ':' + y)
			}

			tallest = Math.max(tallest, currentTreeHeight)
		}
	}
	return memo.size
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
