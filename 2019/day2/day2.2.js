function opCode(noun, verb) {
  const input = process.argv[2].split('\n').map(Number)

  input[1] = noun
  input[2] = verb

  for (let i = 0; i < input.length; i += 4) {
    const [operand, first, second, dest] = input.slice(i, i + 4)
    const operands = [, (a, b) => a + b, (a, b) => a * b]

    if (operands[operand]) {
      input[dest] = operands[operand](input[first], input[second])
    }
  }

  return input
}

for (let noun = 0; noun < 99; noun++) {
  for (let verb = 0; verb < 99; verb++) {
    const [output] = opCode(noun, verb)
    if (output === 19690720) {
      console.log(noun * 100 + verb)
      break
    }
  }
}
