const rows = $('pre:nth-of-type(2)').innerText.trim().split('\n')

let cycle = 1
let sum = 1

const values = []
let multiplier = 20

for (const row of rows) {
	cycle++
	if (row !== 'noop') {
		cycle++
		sum += Number(row.split(' ')[1])
	}

	if (cycle >= 20 && !values.length) {
		values.push(sum * multiplier)
		multiplier += 40
		cycle = 1
	}

	console.log(row)

	if (cycle >= 40) {
		console.log(sum)
		values.push(sum * multiplier)
		multiplier += 40
		cycle = 1
	}
}

console.log(values)

console.log(
	values.reduce((acc, cur) => acc + cur, 0)
)