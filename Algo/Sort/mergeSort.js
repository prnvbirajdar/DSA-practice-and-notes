function mergeSort(mainArr) {
  if (mainArr.length === 1) return mainArr;

  let mid = Math.floor(mainArr.length / 2);
  let left = mainArr.slice(0, mid);
  let right = mainArr.slice(mid);

  return mergeFunc(mergeSort(left), mergeSort(right));
}

function mergeFunc(arr1, arr2) {
  let i = 0;
  let j = 0;
  const combined = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

//mergeFunc([1, 3, 7, 8], [2, 4, 5, 6]);

