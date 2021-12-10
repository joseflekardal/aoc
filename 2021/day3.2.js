function getLifeSupportRating(input) {
  function createRatingGetter(getNextInput) {
    return function recurse(list, i = 0) {
      if (list.length === 1) return parseInt(list[0], 2)
      const currentList = list.reduce(
        (memo, cur) => {
          memo[cur[i]].push(cur)
          return memo
        },
        [[], []]
      )
      const nextInput = getNextInput(...currentList)
      return recurse(nextInput, i + 1)
    }
  }

  const getORating = createRatingGetter((zeros, ones) =>
    ones.length < zeros.length ? zeros : ones
  )
  const getCO2Rating = createRatingGetter((zeros, ones) =>
    ones.length < zeros.length ? ones : zeros
  )

  const oxygenGeneratorRating = getORating(input)
  const CO2ScrubberRating = getCO2Rating(input)

  return oxygenGeneratorRating * CO2ScrubberRating
}

console.log(getLifeSupportRating(input))
