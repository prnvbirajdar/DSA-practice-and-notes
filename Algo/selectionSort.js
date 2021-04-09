function SelectionSort(arr) {
  let n = arr.length;
  // n-1 because we loop n-1 times through the array
  for (let i = 0; i < n; i++) {
    // assumes i index has min item
    let min = i;
    for (let j = i + 1; j < n; j++) {
      console.log(i, j);
      // loops over rest of items and compares to min
      // if jth item is min, min is j
      if (arr[j] < arr[min]) min = j;
    }
    // swaps only if min and i are different
    // here min will have smallest number, and i will be the i iteration of the first for loop
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

// arr1 = [8, 6, 4, 7, 5, 1, 2, 3];

function selectionSort2(arr) {
  let n = arr.length;
  let min;
  for (let i = 0; i < n; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log(i, min); //only sorts the items that are different
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

function FizzBuzz() {
  for (let i = 1; i < 101; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    if (output === "") output = i;

    console.log(output);

    // if (i % 3 === 0 && i % 5 !== 0) {
    //   console.log("fixx");
    // } else if (i % 3 !== 0 && i % 5 === 0) {
    //   console.log("buzz");
    // } else if (i % 3 === 0 && i % 5 === 0) {
    //   console.log("fizzbuzz");
    // } else {
    //   console.log(i);
    // }
  }
}
