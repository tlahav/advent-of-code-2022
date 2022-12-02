import run from "aocrunner";

const parseInput = (rawInput: string) => {
  return rawInput.split("\n").map(line => {
    return [line[0].charCodeAt(0) - 64, line[2].charCodeAt(0) - 87]
  })
};

const winningPlayset: Record<number, number> = { 1: 2, 2: 3, 3: 1 }

const losingPlayset: Record<number, number> = { 1: 3, 2: 1, 3: 2 }

const part1 = (rawInput: string) => {
  let myScore = 0;
  const input = parseInput(rawInput);
  input.forEach(el => {
      myScore += 3 * (el[0] == el[1] ? 1: winningPlayset[el[0]] == el[1] ? 1 : 0) + el[1]
  })
  return myScore;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let myScore = 0;
  input.forEach(el => {
    if (el[1] == 2) {
      myScore += 3 + el[0];
    } else {
      if (el[1] == 1) {
        myScore += losingPlayset[el[0]]
      } else {
        myScore += winningPlayset[el[0]] + 6;
      }
    }
  });
  return myScore;
};

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

