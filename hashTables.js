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
  // key is the key string
  _hash(key) {
    let hash = 0;
    // it gives a number between 0 and 6 for each other
    // 23 is used because it is prime number
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    // always gives values between 0 and 6
    return hash;
  }

  set(key, value) {
    // index to figure out which array position to push our key-value pair
    let index = this._hash(key);
    // if nothing exists in index, we create a new empty array
    if (!this.dataMap[index]) this.dataMap[index] = [];
    // we then push they key-value pairs
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      const answer = this.dataMap[index].filter((item) => item[0] === key);
      return answer[0][1]
    }
    return undefined;
  }
}

let myHashTable = new HashTable();

myHashTable.set("lumber", 70);
myHashTable.set("bolts", 1400);
myHashTable.set("washers", 50);

console.log(myHashTable);

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
