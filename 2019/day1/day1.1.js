const input = process.argv[2].split('\n').map(Number)

function requiredFuel(total, fuel) {
  return total + Math.floor(fuel / 3) - 2
}

console.log(input.reduce(requiredFuel, 0))
