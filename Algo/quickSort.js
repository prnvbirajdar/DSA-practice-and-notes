
function swap(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
}

// [4, 6, 1, 7, 3, 2, 5];
