function solvePuzzle(input) {
	const GAME_KEY = {
		A: { // rock
			X: 4, // rock
			Y: 8, // paper
			Z: 3, // scissors
		},
		B: { // paper
			X: 1, // rock
			Y: 5, // paper
			Z: 9, // scissors
		},
		C: { // scissors
			X: 7, // rock
			Y: 2, // paper
			Z: 6, // scissors
		}
	}

	let score = 0
	for (const row of input.split('\n')) {
		const [them, me] = row.split(' ')
		score += GAME_KEY[them][me]
	}

	return score
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
