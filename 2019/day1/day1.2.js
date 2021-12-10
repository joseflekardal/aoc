function dayOnePartTwo(input) {
  let requiredFuel = (x) => Math.floor(x / 3 - 2)

  function recursiveRequiredFuel(mass) {
    let localMass = requiredFuel(mass)
    let localMasses = [localMass]

    while (requiredFuel(localMass) > 0) {
      localMass = requiredFuel(localMass)
      localMasses.push(localMass)
    }

    return localMasses.reduce((total, fuel) => total + fuel)
  }

  return input.reduce((total, fuel) => total + recursiveRequiredFuel(fuel), 0)
}

console.log(dayOnePartTwo(require('./day1.json')))
