import run from "aocrunner";

// const parseInput = (rawInput: string): Array<number> => {
//   return rawInput.split(/\n\s*\n/).flatMap(elfCaloriesArr => elfCaloriesArr.split(/\r?\n/).map(item => +item))
// };

// const reduceThings = (inputsArray: Array<number>): Array<number> => {
//   let caloriesArray: Array<number> = [];
//   inputsArray.reduce((acc, item) => {
//     if (item > 0) {
//       return acc + item
//     } else {
//       caloriesArray.push(acc);
//       return 0;
//     }
//   });
//   return caloriesArray;
// }

const part1 = (rawInput: string) => {
  const input = rawInput.split(/\n\s*\n/).map(elfCaloriesArr => elfCaloriesArr.split(/\r?\n/).flatMap(item => +item).reduce((acc, item) => acc + item));
  let sorted = input.sort((a, b) => b - a);
  return sorted[0];
};

const part2 = (rawInput: string) => {

  const input = rawInput.split(/\n\s*\n/).map(elfCaloriesArr => elfCaloriesArr.split(/\r?\n/).flatMap(item => +item).reduce((acc, item) => acc + item));
  let sorted = input.sort((a, b) => b - a);
  return sorted.splice(0, 3).reduce((acc, item) => acc + item, 0);

};

run({
  part1: {
    // tests: [
    //   {
    //     input: `
    //     1000
    //     2000
    //     3000
        
    //     4000
        
    //     5000
    //     6000
        
    //     7000
    //     8000
    //     9000
        
    //     10000`,
    //     expected: 24000,
    //   },
    // ],
    solution: part1,
  },
  part2: {
    // tests: [
    //   {
    //     input: `
    //     1000
    //     2000
    //     3000
        
    //     4000
        
    //     5000
    //     6000
        
    //     7000
    //     8000
    //     9000
        
    //     10000`,
    //     expected: 45000,
    //   },
    // ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
