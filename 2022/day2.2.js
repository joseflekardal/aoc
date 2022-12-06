function solvePuzzle(input) {
	const K = { A: 0, B: 1, C: 2 }
	const S = [1, 2, 3]
	const GAME_KEY = {
		X: [-1, 0],
		Y: [0, 3],
		Z: [1, 6],
	}

	let score = 0

	for (const row of input.split('\n')) {
		const [them, me] = row.split(' ')

		const themScore = S[K[them]]
		const [direction, myPoints] = GAME_KEY[me]

		score += myPoints + (S.at(K[them] + direction) || S.at(0))
	}

	return score
}

const input = docuemnt.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
