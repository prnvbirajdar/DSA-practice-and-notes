// function that return first recurring number i.e. 2

function recurringNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const result = arr.filter((char) => char === element);
    if (result.length > 1) {
      return result[0];
    }
  }
}

array1 = [2, 3, 4, 5, 6, 3, 2, 4, 5];
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

console.log(recurringNum(array2));
