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

const mergeSortedArrays = (a, b) => [...a, ...b].sort((c, d) => c - d);

console.log(mergeSortedArrays([0, 3, 5, 57], [1, 2, 50]));

// determine if a string has all unique characters
//abcde gives true
//aabbc gives false

// not very efficient, o(n^2)
function uniqueChar(str) {
  str = str.toString().toLowerCase(); //converts to lowercase

  let trueVal;
  let falseVal;

  //makes sure the string is not undefined and is a string
  if (!str || typeof str !== "string") {
    return "Enter a valid string";
  }

  //if string length is 1, it is unique
  if (str.length === 1) {
    return "Yep, it is unique";
  }

  //conversts string to an array
  const strArr = [...str];

  //loops over every element
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];

    //result is a new array of all filtered character
    const result = strArr.filter((char) => char === element);

    //if more that one character, it is not unique else unique
    if (result.length > 1) {
      console.log("false");
      falseVal = true;
      break;
    } else {
      trueVal = true;
      console.log("true");
    }
  }

  if (falseVal) {
    return false;
  }

  if (trueVal) {
    return true;
  }
}

uniqueChar(13123123);
uniqueChar("false");
