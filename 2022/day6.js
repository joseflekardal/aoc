function solvePuzzle(input, sequenceLength = 4) {
	let state = []
	let result = 0

	for (let i = 0; i < input.length; i++) {
		const char = input[i]
		const index = state.indexOf(char)
		const hasChar = index !== -1

		if (hasChar) {
			state = state.slice(index + 1)
		}

		state.push(char)

		if (state.length === sequenceLength) {
			result = i + 1
			break
		}
	}

	return result
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)
console.log(result)