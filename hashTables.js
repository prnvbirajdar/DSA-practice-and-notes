// Hash Table Constructor

class HashTable {
  // size is 7, because it is a prime number
  // and it causes a more randomized distribution of key-value pairs
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  // hash function
  // underscore is to denote not to called methos directly and 
  // that it should be only be called by other methods
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}

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
