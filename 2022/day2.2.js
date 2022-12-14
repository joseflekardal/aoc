function solvePuzzle (input) {
	const SCORES = [1, 2, 3]

	const THEIR_SCORE_INDEX = { A: 0, B: 1, C: 2 }

	const OUTCOME_KEY = {
			X: [-1, 0],
			Y: [0, 3],
			Z: [1, 6],
	}

	let totalScore = 0

	for (const row of input.trim().split('\n')) {
			const [theirMove, desiredOutcome] = row.split(' ')
			const [myScoreOffset, outcomeScore] = OUTCOME_KEY[desiredOutcome]
			const myScoreIndex = THEIR_SCORE_INDEX[theirMove] + myScoreOffset
			const myMoveScore = SCORES.at(myScoreIndex) || SCORES.at(0)
		
			totalScore += outcomeScore + myMoveScore
	}
	
	return totalScore
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)

console.log(result)
