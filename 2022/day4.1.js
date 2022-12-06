function solvePuzzle(input) {
	const row = input.trim().split('\n')
	let state = 0

	for (const row of input) {
		const [a, b] = row.split(',').map(
			rawSection => rawSection.split('-').map(Number)
		)

		if (b[0] >= a[0] && b[1] <= a[1] || a[0] >= b[0] && a[1] <= b[1]) {
			state++
		}

	}
	return state
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)
