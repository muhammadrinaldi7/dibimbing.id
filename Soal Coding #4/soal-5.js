/**
 * Rotate array 2 Dimensi
 * 
 * NOTE : BEBAS MENGGUNAKAN JS FUNCTION APAPUN
 */


const rotate = (arr, num) => {
  // tulis code di sini

  /**
   * Langkah :
   * - buat jadi array 1D
   * - process rotate
   * - copy "arr", kemudian replace semua valuenya dengan dari rotate
   */

  // array 1D & copy arr
  // let arr1D = arr.reduce((acc, val) => acc.concat(val), []);
  let arr1D = [];
  let arrCopy = [];
  arr.forEach(row => {
    arrCopy.push([...row]); // ex : [1,2,3]
    arr1D.push(...row);
  });
  // console.log({arr1D, arrCopy, arr});

  // rotate array 1D nya
  num = num % arr1D.length;
  // arr1D = arr1D.slice(-num).concat(arr1D.slice(0, arr1D.length - num));
  for (let i = 0; i < num; i++) {
    arr1D.unshift(arr1D.pop());
  }

  // console.log('sebelum',{arr1D, arrCopy});

  // replace value arrCopy dengan urutan dari arr1D
  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy[i].length; j++) {
      arrCopy[i][j] = arr1D.shift();
    }
  }

  // console.log('setelah',{arr1D, arrCopy, arr});

  return arrCopy;
  
}

let array2d = [
  [1,2,3],
  [4,5,6,7], // jumlah tiap row bebas, minimal 1
  [8,9,10]
];

console.log('array : ', array2d); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
console.log('rotasi ke-1 : ', rotate(array2d, 1)); // output: [ [ 10, 1, 2 ], [ 3, 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log('rotasi ke-2 : ', rotate(array2d, 2)); // output: [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
console.log('rotasi ke-12 : ', rotate(array2d, 12)); // output:  [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]