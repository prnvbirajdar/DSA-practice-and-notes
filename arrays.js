// Create a function to reverse a string
// "hi my name is pranav"

function ReverseStr(str) {
  if (!str || str.length <= 2 || typeof str !== "string") {
    return "give proper input";
  }

  const newArr = [];
  const strLength = str.length - 1;

  for (let index = strLength; index >= 0; index--) {
    const element = str[index];
    newArr.push(element);
  }

  console.log(newArr);
  return newArr.join("");
}

ReverseStr("hi my name is pranav");
