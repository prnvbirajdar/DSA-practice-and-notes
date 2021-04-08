// function ValidAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let obj1 = {};
//   let obj2 = {};

//   for (let char of str1) {
//     obj1[char] = (obj1[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     obj2[char] = (obj2[char] || 0) + 1;
//   }

// }

//String or array

function sameNumberPresent(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    arr1 = [...arr1];
    arr2 = [...arr2];
  
    const obj = {};
  
    arr1.map((num) => (obj[num] = true));
  
    for (let i = 0; i < arr2.length; i++) {
      if (obj[arr2[i]]) return true;
    }
  
    return false;
  }
  