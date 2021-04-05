// Create a function to reverse a string
// "hi my name is pranav"

function ReverseStr(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Error: Enter valid string";
  }

  const newArr = [];
  const strLength = str.length - 1;

  for (let index = strLength; index >= 0; index--) {
    const element = str[index];
    newArr.push(element);
  }

  return newArr.join("");
}

console.log(ReverseStr("Hi, does this works?"));

// Cleaner method

const ReverseStr2 = (str) => [...str].reverse().join("");

console.log(ReverseStr2("Hi, does this works?"));

// Merge Sorted Arrays
// [0,3,5,10] [1,2,7,15]

const mergeSortedArrays = (a, b) =>
  [...a, ...b].sort((c, d) => c-d);

console.log(mergeSortedArrays([0, 3, 5, 57], [1, 2, 50]));
