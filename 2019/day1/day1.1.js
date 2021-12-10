const input = require('./day1.json')

function requiredFuel(total, fuel) {
  return total + Math.floor(fuel / 3) - 2
}

console.log(input.reduce(requiredFuel, 0))
