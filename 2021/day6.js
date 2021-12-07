function partOne(input) {
  let state = input.split(",").map(Number);
  let prevLength = state.length;

  for (let day = 0; day < 80; ++day) {
    for (let i = 0; i < state.length; ++i) {
      if (state[i] > 0) {
        state[i]--;
      } else {
        state[i] = 6;
        state.push(8);
      }
    }
    prevLength = state.length;
  }

  return state.length;
}

function getLanternPopulation(initialPopulation, days = 256) {
  const state = initialPopulation.split(",").reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, new Array(9).fill(0));

  for (let day = 0; day < days; day++) {
    const repopulate = state.shift();

    state[6] += repopulate;

    state.push(repopulate);
  }

  return state.reduce((acc, cur) => acc + cur);
}
