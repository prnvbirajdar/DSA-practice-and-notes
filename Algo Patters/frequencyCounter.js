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

function FizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      console.log("fixx");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }
}
