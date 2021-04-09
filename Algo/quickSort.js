
// watch the video for pivot code explanation
function pivotFunc(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);

  return swapIndex;
}

function swap(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
}

// [4, 6, 1, 7, 3, 2, 5];
