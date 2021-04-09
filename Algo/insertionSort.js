function insertionSort(arr) {
  let n = arr.length;
  let temp;
  // first loop assigns i to second index i.e here i starts from 1
  for (let i = 1; i < n; i++) {
    // we assign temp to this value
    temp = arr[i];
    // now we loop over all the items that are to the left of i
    //
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// arr1 = [8, 6, 4, 7, 5, 1, 2, 3];
