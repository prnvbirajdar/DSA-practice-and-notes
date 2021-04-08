function SelectionSort(arr) {
  let n = arr.length;
  // n-1 because we loop n-1 times through the array
  for (let i = 0; i < n - 1; i++) {
    // assumes i index has min item
    let min = i;
    for (let j = i + 1; j < n; j++) {
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
