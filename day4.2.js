function findValidPasswords ({ start, end }) {
  let passwords = []

  for (let password = start; password < end; password++) {
    const pStr = password.toString()
    const digits = [...pStr].map(s => parseInt(s))
  
    const hasDoubles = pStr.match(/([0-9])\1+/)
    const isIncreasing = digits.every((digit, i) => (i + 1 === digits.length) || digits[i + 1] >= digit)

    let doubleIsNotPartOfLargerGroup = true
    if (hasDoubles && hasDoubles[0].length > 2) {
      const remainsHasDoubles = [...pStr]
        .filter(d => d !== hasDoubles[1])
        .join('')
        .match(/([0-9])\1+/)

      doubleIsNotPartOfLargerGroup = remainsHasDoubles && remainsHasDoubles[0].length === 2
    }

    if (isIncreasing && hasDoubles && doubleIsNotPartOfLargerGroup) {
      passwords.push(password)
    }
  }

  return passwords
}

console.log(
  findValidPasswords({ start: 136818, end: 685979 })
)
