input.split("\n");

function getNormalizedNumber(operator, number) {
  return operator === "-" ? -number : number;
}

const modifiedInput = rawInput.reduce((acc, cur, i) => {
  const modInput = [...rawInput];
  if (modInput[i].includes("jmp")) {
    modInput[i] = modInput[i].replace("jmp", "nop");
    acc.push(modInput);
  } else if (modInput[i].includes("nop")) {
    modInput[i] = modInput[i].replace("nop", "jmp");
    acc.push(modInput);
  }
  return acc;
}, []);

loop: for (const input of modifiedInput) {
  const memo = new Set();
  let pointer = 0;
  let acc = 0;

  while (!memo.has(pointer)) {
    memo.add(pointer);

    if (!input[pointer]) {
      console.log("FOUND", acc);
      break loop;
    }

    const [instruction, count] = input[pointer].split(" ");
    const operator = count[0];
    const num = +count.substring(1);

    if (instruction === "jmp") {
      pointer += getNormalizedNumber(operator, num);
      continue;
    }

    if (instruction === "acc") {
      acc += getNormalizedNumber(operator, num);
    }

    pointer++;
  }
}
