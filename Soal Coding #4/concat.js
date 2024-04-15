let arr1 = [1,2];
let arr2 = [6,7];

let newArr1 = [...arr1, ...arr2];
let newArr2 = arr1.concat(arr2);

console.log({newArr1, newArr2});