function solvePuzzle(input) {
    let head = [0, 0]
    let tail = [0, 0]
    const memo = new Set()
    let previousHead = [...head]

    const move = {
        L: vec => vec[1]--,
        R: vec => vec[1]++,
        U: vec => vec[0]--,
        D: vec => vec[0]++,
    }

    const instructions = input.trim().split('\n')
    for (const instruction of instructions) {
        const [dir, steps] = instruction.split(' ')
        const intSteps = parseInt(steps)
        let i = 0

        while (i < intSteps) {
            i++
            move[dir](head)

            const isDiagonal = head[0] !== tail[0] && head[1] !== tail[1]

            if (head[0] - tail[0] === 2) {
                if (isDiagonal) {
                    tail = [...previousHead]
                } else {
                    tail[0]++
                }
            }

            if (tail[0] - head[0] === 2) {
                if (isDiagonal) {
                    tail = [...previousHead]
                } else {
                    tail[0]--
                }
            }

            if (head[1] - tail[1] === 2) {
                if (isDiagonal) {
                    tail = [...previousHead]
                } else {
                    tail[1]++
                }
            }

            if (tail[1] - head[1] === 2) {
                if (isDiagonal) {
                    tail = [...previousHead]
                } else {
                    tail[1]--
                }
            }

            memo.add(tail.join(':'))
            previousHead = [...head]
        }
    }
    return memo.size
}


const input = $('pre').innerText
const result = solvePuzzle(input)

console.log(result)
