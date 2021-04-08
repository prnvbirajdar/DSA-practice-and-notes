function bubbleSort(arr) {
  let n = arr.length;

  // n-1 because we loop n-1 times through the array
  for (let i = 0; i < n - 1; i++) {
    // loops again, this time only looping through (n-i-1) items
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swaps the items
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//arr1 = [8, 6, 4, 7, 5, 1, 2, 3];
