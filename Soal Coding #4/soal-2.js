/**
 * Menggabungkan array
 */

// let array2d = [[1,2,3],[4,5,6],[7,8,9],[10]];

// tulis code di sini

// versi for of
// let newArr = [];
// for (let subArray of array2d) {
//     for (let element of subArray) {
//         newArr.push(element);
//     }
// }

// versi for "i" (biasa)?
// let newArr = [];
// for (let i = 0; i < array2d.length; i++) {

//   for (let j = 0; j < array2d[i].length; j++) {
//     newArr.push(array2d[i][j]);
//   }
  
// }

// versi foreach
// let newArr = [];
// array2d.forEach(row => {
//   row.forEach(element => {
//     newArr.push(element);
//   });
// });

// versi ...

// let newArr = [];
// for (let i = 0; i < array2d.length; i++) {
//   newArr.push(...array2d[i])
// }

// for (const row of array2d) {
//   newArr.push(...row);
// }

// reduce ? Reduce the values of an array to a single value (going left-to-right)
let array2d = [[1,2,3],[4,5,6],[7,8,9],[10]];
let newArr = array2d.reduce((acc, currVal) => [...acc, ...currVal], []); 
//  let newArr = [];
 
//  for(let j=0;j < array2d[i].length;j++){
//   newArr.push(array2d[i][j]);
//  }
// for(let i = 0; i < array2d.length; i++) {
//     newArr.push(...array2d[i]);
// }

/*
processnya : 
loop-1 : acc = [], currVal = [1,2,3], return [...acc, ...currVal]  ===> [1,2,3]
loop-2 : acc = [1,2,3], currVal = [4,5,6], return [...acc, ...currVal] ===> [1,2,3,4,5,6]
loop-3 : acc = [1,2,3,4,5,6], currVal = [7,8,9], return [...acc, ...currVal] ===> [1,2,3,4,5,6,7,8,9]
loop-4 : acc = [1,2,3,4,5,6,7,8,9], currVal = [10], return [...acc, ...currVal] ===> [1,2,3,4,5,6,7,8,9,10]
outputnya ===> [1,2,3,4,5,6,7,8,9,10]

*/

console.log(newArr); // output: [1,2,3,4,5,6,7,8,9]
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)