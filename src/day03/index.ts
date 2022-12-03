import run from "aocrunner";

const getScoreOf = (element: string): number => {
  let el = element.charCodeAt(0);
  return (el >= 97) ? el - 96 : el - 38
}

const part1 = (rawInput: string) => {
  const input = rawInput.split('\n').map(line => [line.slice(0, line.length / 2).split(''), line.slice(line.length / 2, line.length).split('')]);
  return input.map(line => line[0].filter(val => line[1].includes(val))[0]).reduce((acc, item) => acc + getScoreOf(item), 0)
  // return processText(rawInput)
};

// Code generated by GPT-3 using the following prompt: 
// "Write me a TypeScript function that would accept some text, take each line individually and find characters that show up in both halves. 
// Then, convert first found duplicate to ASCII where a through z is 1 to 26 and A through Z is 27 to 52. Finally, sum up all the converted values
//
// function processText(text: string): number {
//   let sum = 0;

//   for (const line of text.split("\n")) {
//     const firstHalf = line.substring(0, line.length / 2);
//     const secondHalf = line.substring(line.length / 2);

//     for (const c of firstHalf) {
//       if (secondHalf.includes(c)) {
//         let asciiValue = c.charCodeAt(0);
//         if (c >= "a" && c <= "z") {
//           asciiValue -= 96;
//         } else if (c >= "A" && c <= "Z") {
//           asciiValue -= 38;
//         }
//         sum += asciiValue;
//         break;
//       }
//     }
//   }

//   return sum;
// }



const part2 = (rawInput: string) => {
  const input = rawInput.split('\n').map(line => line.split(''));;
  let duplicates = [];
  for (let i = 0; i < input.length; i += 3) {
    let sliced = input.slice(i, i + 3);
    duplicates.push(sliced[0].filter(val1 => sliced[1].includes(val1)).filter(val1 => sliced[2].includes(val1))[0]);
  }
  return duplicates.reduce((acc, item) => acc + getScoreOf(item), 0);
  //return processText2(rawInput)
};


// Code generated by GPT-3 using the following prompt: 
// "Write me a TypeScript function that would accept some text, take chunks of 3 lines and finds a single character that shows up in all three lines.
// Then, convert that character to ASCII where a through z is 1 to 26 and A through Z is 27 to 52. Finally, sum up all the converted values"
//
// function processText2(text: string): number {
//   let sum = 0;

//   const lines = text.split("\n");
//   for (let i = 0; i < lines.length; i += 3) {
//     const chunk = lines.slice(i, i + 3);

//     for (const c of chunk[0]) {
//       if (chunk[1].includes(c) && chunk[2].includes(c)) {
//         let asciiValue = c.charCodeAt(0);
//         if (c >= "a" && c <= "z") {
//           asciiValue -= 96;
//         } else if (c >= "A" && c <= "Z") {
//           asciiValue -= 38;
//         }
//         sum += asciiValue;
//         break;
//       }
//     }
//   }

//   return sum;
// }


run({
  part1: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp`,
        expected: 16,
      },
      {
        input: `
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
        expected: 38,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: `
      //   vJrwpWtwJgWrhcsFMMfFFhFp
      //   jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      //   PmmdzqPrVvPwwTWBwg`,
      //   expected: 18,
      // },
      // {
      //   input: `
      //   wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      //   ttgJtRGJQctTZtZT
      //   CrZsJsPPZsGzwwsLwLmpwMDw`,
      //   expected: 52,
      // },
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});