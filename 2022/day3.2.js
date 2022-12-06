function getPriorityPointByChar(char) {
	return char.charCodeAt() - (/[A-Z]/.test(char) ? 38 : 96)
}

function solvePuzzle(input) {
	const rows = input.split('\n')

	let prioritySum = 0

	for (let i = 0; i < rows.length; i += 3) {
		const elfMemo = {}

		for (const row of rows.slice(i, i + 3)) {
			const rowMemo = new Set()

			for (const char of row) {
				if (rowMemo.has(char)) {
					continue
				}

				rowMemo.add(char)
				elfMemo[char] = (elfMemo[char] || 0) + 1

				if (elfMemo[char] === 3) {
					prioritySum += getPriorityPointByChar(char)
					break
				}
			}
		}
	}

	return prioritySum
}

const input = document.querySelector('pre').innerText
const result = solvePuzzle(input)

console.log(result)