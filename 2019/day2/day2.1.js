const numbers = require('./day2.json')

function opCode (noun, verb) {
  numbers[1] = noun
  numbers[2] verb

  for (let i = 0; i < numbers.length; i += 4) {
    const [operand, first, second, dest] = numbers.slice(i, i + 4)
    const operands = [, (a, b) => a + b, (a, b) => a * b]

    if (operands[operand]) {
      numbers[dest] = operands[operand](numbers[first], numbers[second])
    }
  }
  
  return numbers
}

for (let noun = 0; noun < 99;  noun++) {
  for (let verb = 0; verb < 99; verb++) {
    const [output] = opCode(noun, verb)

    if (output === 19690720) {
      console.log(noun * 100 + verb)
      break
    }
  }
}
