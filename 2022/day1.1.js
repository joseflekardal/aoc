function solvePuzzle(input) {
	const rows = input.split('\n')

	let elfKcal = 0
	let greatestKcalTotal = 0

	for (const row of rows) {
		const kcal = Number(row)

		if (kcal) {
			elfKcal += kcal
		} else {
			greatestKcalTotal = Math.max(elfKcal, greatestKcalTotal)
			elfKcal = 0
		}
	}

	return greatestKcalTotal
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)

console.log(result)