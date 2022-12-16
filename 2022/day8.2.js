function solvePuzzle(input) {
	const forrest = input.trim().split('\n')
	let bestScenicScore = 0

	//  trees on the edge are ignored
	for (let y = 1; y < forrest.length - 1; y++) {
		for (let x = 1; x < forrest[y].length - 1; x++) {
			const currentTree = Number(forrest[y][x])
			const viewingDistances = []

			let localX = x - 1
			let count = 0
			while (localX >= 0) {
				count++
				const compareTree = Number(forrest[y][localX])
				if (compareTree >= currentTree) break
				localX--
			}

			viewingDistances.push(count || 1)

			localX = x + 1
			count = 0
			while (localX < forrest[y].length) {
				count++
				if (Number(forrest[y][localX]) >= currentTree) break
				localX++
			}

			viewingDistances.push(count || 1)

			let localY = y - 1
			count = 0
			while (localY >= 0) {
				count++
				if (Number(forrest[localY][x]) >= currentTree) break
				localY--
			}

			viewingDistances.push(count || 1)

			localY = y + 1
			count = 0
			while (localY < forrest.length) {
				count++
				if (Number(forrest[localY][x]) >= currentTree) break
				localY++
			}

			viewingDistances.push(count || 1)

			const currentScenicScore = viewingDistances.reduce((scenicScore, viewingDistance) => scenicScore * viewingDistance)

			bestScenicScore = Math.max(bestScenicScore, currentScenicScore)
		}
	}

	return bestScenicScore
}

const input = document.querySelector('pre')
const result = solvePuzzle(input)
console.log({ bestScenicScore })
