function solvePuzzle(input) {
	const rows = input.split('\n')
	const topList = []
	let elfKcal = 0
	
	for (const row of rows) {
		const kcal = Number(row)

		if (kcal) {
			elfKcal += kcal
		} else {
			topList.push(elfKcal)
			elfKcal = 0

			if (topList.length > 3) {
				const smallestTotal = Math.min(...topList)
				const indexOfSmallestTotal = topList.indexOf(smallestTotal)
				topList.splice(indexOfSmallestTotal, 1)
			}
		}
	}

	return topList.reduce((acc, total) => acc + total, 0)
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)

console.log(result)