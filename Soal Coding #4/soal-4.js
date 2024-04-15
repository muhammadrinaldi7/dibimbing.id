/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {
  // tulis code di sini

  /**
   * array:
   * - push : masukin ke paling belakang
   * - pop : ngambil dari belakang, valuenya di return (bisa ditampung di variable)
   * - unshift : masukin dari depan
   * - shift : ngambil dari depan, valuenya di return (bisa ditampung di variable)
   */
  
  
  // [1,2,3]
  // rotate 1000 kali => [3,1,2]
  // rotate 3000 kali => [1,2,3]
  // rotate 1, ngambil 1 dari belakang
  // rotate 2, ngambil 2 dari belakang
  // rotate 3 (sama kayak arr.length), ga ada rotate, ngambil 0 dari belakang
  // rotate 4, sama dengan ngambil 1 aja dari belakang
  
  // bramantyo
  // const newArr = [...arr];
  // let getFromBehind = num % newArr.length; // 4 % 3 = 1
  // for (let i = 0; i < getFromBehind; i++) {
  //   let lastItem = newArr.pop(); 
  //   newArr.unshift(lastItem);
  // }
  // return newArr;

  // darryl
  num = num % arr.length; // ex: ngambil 2 => [7,8] | 
  return arr.slice(-num).concat(arr.slice(0, arr.length - num)); // 0,(6-2) = 0,4 => ngambil index 0-3 => [3,4,5,6]

}

let angka = [3,4,5,6,7,8]; // 8 % 6 = 2

console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)