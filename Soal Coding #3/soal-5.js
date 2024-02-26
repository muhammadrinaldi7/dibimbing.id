/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 & 1 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push

*/

const countData = (arr, searchValue) => {
  // tulis code di sini
  
let hitung = {};

for(let i = 0; i < searchValue.length; i++) {
  let pencarian = searchValue[i];
  hitung[pencarian] = 0;
  for(let j = 0; j < arr.length;j++) {
    if(arr[j] === pencarian){
      hitung[pencarian]++;
    }
  }
}
return hitung;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countData(data_array, [1,5]));  // output: { '1': 4, '5': 6 }  (satu ada 4 & lima ada 6)
