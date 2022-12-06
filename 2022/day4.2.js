function inRange([start, end]) {
	return (needle) => {
		let isInRange = false
		
		for (let i = start; i <= end; i++) {
			if (needle === i) {
				isInRange = true
				break
			}
		}
		
		return isInRange
	}
}

function solvePuzzle(input) {
	const rows = input.trim().split('\n')
	let state = 0

	for (const row of rows) {
		const [aSection, bSection] = row.split(',').map(
			rawSection => rawSection.split('-').map(Number)
		)

		const aRange = aSection[1] - aSection[0]
		const bRange = bSection[1] - bSection[0]

		if (aRange > bRange) {
			if (bSection.some(inRange(aSection))) {
				state++
			}
		} else {
			if (aSection.some(inRange(bSection))) {
				state++
			}
		}
	}

	return state
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
