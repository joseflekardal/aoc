function solvePuzzle(input) {
	let cycle = 0
	let pos = 1
	let result = ''

	const rows = input.trim().split('\n')

	for (const row of rows) {
		const sprite = [pos - 1, pos, pos + 1]

		if (sprite.some(p => p === cycle)) {
			result += '#'
		} else {
			result += '.'
		}

		cycle++

		if (cycle === 40) {
			cycle = 0
		}

		if (row === 'noop') {
			continue
		}

		if (sprite.some(p => p === cycle)) {
			result += '#'
		} else {
			result += '.'
		}

		cycle++

		if (cycle === 40) {
			cycle = 0
		}

		pos += Number(row.split(' ')[1])
	}

	const chars = Array.from(result)
	const pixelRows = []

	while (chars.length >= 40) {
		const row = chars.splice(0, 40).join('')
		pixelRows.push(row)
	}

	return pixelRows.join('\n')
}

const input = $('pre').innerText
const result = solvePuzzle(input)

console.log(result)
