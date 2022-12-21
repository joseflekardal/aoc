const rows = $('pre:nth-of-type(2)').innerText.trim().split('\n')

let cycle = 0
let pos = 1
let result = ''

for (const row of rows) {
    const sprite = [pos - 1, pos, pos + 1]

    if (sprite.some(p => p === cycle)) {
        result += '#'        
    } else {
        result += '.'
    }

    cycle++
    
    if (row === 'noop') {
        continue
    }
    
    if (sprite.some(p => p === cycle)) {
        result += '#'        
    } else {
        result += '.'
    }

    cycle++
    
    pos += Number(row.split(' ')[1])

    console.log({ pos, cycle })
    console.log(result)
}

const x = Array.from(result)
const y = []

while (x.length >= 40) {
    y.push(x.splice(0, 40).join(''))
}

console.log(y.join('\n'))