function bubbleSort(arr) {
  let n = arr.length;

  // n-1 because we loop n-1 times through the array
  for (let i = 0; i < n - 1; i++) {
    console.log(arr[i]);
    // loops again, this time only looping through (n-i-1) items
    for (let j = 0; j < n - i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // swaps the items
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//arr1 = [5,3,2,1,4];

//COLT STEELE video explains it really well
//this is his method

function bubbleSort2(arr) {
  let n = arr.length;
  //optimization if there is no swaps, works great for almost sorted arrays
  let noSwaps;
  for (let i = n; i > 0; i--) {
    console.log(arr[i]);
    //we set noSwaps as true, meaning two item have not swapped
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //however if swaps are still happening in this loop,
        //noswaps is false and the loop continues running and
        //sorting
        noSwaps = false;
      }
    }
    //if noSwaps is true, loop breaks and we get the array
    if (noSwaps) break;
  }
  return arr;
}
