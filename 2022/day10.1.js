function solvePuzzle(input) {
	let cycle = 0
	let register = 1
	
	const signals = []
	let multiplier = 20
	
	const rows = input.trim().split('\n')

	for (const row of rows) {
		if ((cycle === 20 && !signals.length) || cycle === 40) {
			signals.push(register * multiplier)
			multiplier += 40
			cycle = 0
		}

		cycle++

		if ((cycle === 20 && !signals.length) || cycle === 40) {
			signals.push(register * multiplier)
			multiplier += 40
			cycle = 0
		}

		if (row === 'noop') {
			continue
		}

		cycle++

		if ((cycle === 20 && !signals.length) || cycle === 40) {
			signals.push(register * multiplier)
			multiplier += 40
			cycle = 0
		}

		const value = Number(row.split(' ')[1])
		register += value
	}

	return signals.reduce((sum, strength) => sum + strength, 0)
}

const input = $('pre:nth-of-type(2)').innerText
const result = solvePuzzle(input)

console.log(result)
