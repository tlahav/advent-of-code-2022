import run from "aocrunner";

const parseInput = (rawInput: string) => {
  return rawInput.split("\n").map(line => {
    return [line[0].charCodeAt(0) - 65, line[2].charCodeAt(0) - 88]
  })
};

function remEuclid(dividend: number, divisor: number) {
  const absDivisor = Math.abs(divisor);
  const quotient = Math.floor(dividend / absDivisor);
  return (dividend - (absDivisor * quotient));
}
const part1 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, i) => (acc + remEuclid((i[1] - i[0] + 1), 3) * 3 + i[1] + 1), 0)
};

const part2 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, i) => (acc + 3 * (i[1]) + remEuclid(i[0] - 1 + i[1], 3) + 1), 0)
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
      {
        input: `
        A Z`,
        expected: 3,
      },
      {
        input: `
        B Z`,
        expected: 9,
      },
      {
        input: `
        A Y`,
        expected: 8,
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
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

