function getPriorityPointByChar(char) {
	return char.charCodeAt() - (/[A-Z]/.test(char) ? 38 : 96)
}

function solvePuzzle(input) {
	let prioritySum = 0

	for (const row of input.split('\n')) {
		const memo = new Set()

		const firstCompartmentMap = new Set(row.substr(0, row.length / 2))
		const secondCompartment = row.substr(row.length / 2)

		for (const char of secondCompartment) {
			if (firstCompartmentMap.has(char)) {
				prioritySum += getPriorityPointByChar(char)
				break
			} else {
				memo.add(char)
			}
		}
	}

    return prioritySum
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)

console.log(result)
