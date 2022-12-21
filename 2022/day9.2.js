function solvePuzzle(input) {
	const TAIL_SIZE = 9
	const memo = new Set()
	const head = [0, 0]
	const tail = Array(TAIL_SIZE).fill().map(() => [...head])

	const move = {
		L: vec => vec[1]--,
		R: vec => vec[1]++,
		U: vec => vec[0]--,
		D: vec => vec[0]++,
	}

	const rows = input.trim().split('\n')
	for (const row of rows) {
		const [dir, rawSteps] = row.split(' ')
		const steps = parseInt(rawSteps)

		let currentStep = 0
		while (currentStep < steps) {
			currentStep++
			move[dir](head)

			for (let knot = 0; knot < TAIL_SIZE; knot++) {
				const localHead = [...(tail[knot - 1] || head)]
				if (localHead[0] - tail[knot][0] === 2) {
					tail[knot][0]++
					if (tail[knot][1] < localHead[1]) {
						tail[knot][1]++
					}

					if (tail[knot][1] > localHead[1]) {
						tail[knot][1]--
					}
				}

				if (tail[knot][0] - localHead[0] === 2) {
					tail[knot][0]--
					if (tail[knot][1] < localHead[1]) {
						tail[knot][1]++
					}

					if (tail[knot][1] > localHead[1]) {
						tail[knot][1]--
					}
				}

				if (tail[knot][1] - localHead[1] === 2) {
					tail[knot][1]--
					if (tail[knot][0] < localHead[0]) {
						tail[knot][0]++
					}

					if (tail[knot][0] > localHead[0]) {
						tail[knot][0]--
					}
				}

				if (localHead[1] - tail[knot][1] === 2) {
					tail[knot][1]++
					if (tail[knot][0] < localHead[0]) {
						tail[knot][0]++
					}

					if (tail[knot][0] > localHead[0]) {
						tail[knot][0]--
					}
				}
			}

			memo.add(
				tail.at(-1).join(':')
			)
		}
	}

	return memo.size
}

const input = $('pre').innerText
const result = solvePuzzle(input)

console.log(result)
