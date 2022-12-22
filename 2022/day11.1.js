const input = $('pre').innerText

class Monkey {
    #divisibleBy
    #rawEquation

    count = 0
    
    constructor (note) {
        const [_, startingItems, operation, test, ifTrue, ifFalse] = note.split('\n').map(row => row.trim())
        this.startingItems = startingItems.split(': ')[1].split(', ').map(Number)
        this.#rawEquation = operation.split('= ')[1]
        this.#divisibleBy = Number(test.split(' ').at(-1))
        
        this.ifTrue = Number(ifTrue.split(' ').at(-1))
        this.ifFalse = Number(ifFalse.split(' ').at(-1))
    }

    operation (item) {
        const equation = this.#rawEquation.replace(/old/g, item)
        return eval(equation)
    }

    test (num) {
        return num % this.#divisibleBy !== 0
    }
 }

const monkeys = input.split('\n\n').map(note => new Monkey(note))

for (const monkey of monkeys) {
  while (monkey.startingItems.length) {
      monkey.count++
      const item = monkey.startingItems.shift()
      const result = monkey.operation(item)
      if (monkey.test(result)) {
        monkeys[monkey.ifTrue].startingItems.push(result)
      } else {
        monkeys[monkey.ifFalse].startingItems.push(result)
      }
  }
}