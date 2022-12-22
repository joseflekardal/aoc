class Monkey {
	#divisibleBy
	#rawEquation
	#ifTrue
	#ifFalse
	count = 0

	constructor(note) {
		const [_, startingItems, operation, test, ifTrue, ifFalse] = note.split('\n').map(row => row.trim())
		this.startingItems = startingItems.split(': ')[1].split(', ').map(Number)
		this.#rawEquation = operation.split('= ')[1]
		this.#divisibleBy = Number(test.split(' ').at(-1))
		this.#ifTrue = Number(ifTrue.split(' ').at(-1))
		this.#ifFalse = Number(ifFalse.split(' ').at(-1))
	}

	operation(item) {
		const equation = this.#rawEquation.replace(/old/g, item)
		return eval(equation)
	}

	whosNext (num) {
		return num % this.#divisibleBy === 0 ? this.#ifTrue : this.#ifFalse
}
}

function solvePuzzle(input) {
	const monkeys = input.split('\n\n').map(note => new Monkey(note))

	let round = 0
	while (round < 20) {
		round++
		for (const monkey of monkeys) {
			while (monkey.startingItems.length) {
				monkey.count++

				const item = monkey.startingItems.shift()
				let worryLevel = monkey.operation(item)

				worryLevel = Math.floor(worryLevel / 3)

				const nextMonkeyIdx = monkey.whosNext(worryLevel)
				monkeys[nextMonkeyIdx].startingItems.push(worryLevel)
			}
		}
	}

	monkeys.sort((a, b) => b.count - a.count)
	const monkeyBusiness = monkeys[0].count * monkeys[1].count

	return monkeyBusiness
}

const input = $('pre').innerText
const result = solvePuzzle(input)

console.log(result)
