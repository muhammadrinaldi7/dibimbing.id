let angka = [3,4,5,6,7,8];

let dari_0_2 = angka.slice(0,2); // ambil index 0,1
console.log(dari_0_2);

let dari_2_5 = angka.slice(2,5); // ambil index 2,3,4
console.log(dari_2_5);

let dari_2_end = angka.slice(2); // ambil index 2 sampai ujung
console.log(dari_2_end);

let dari_min_2_end = angka.slice(-2); // ambil 2 item dari belakang sampai ujung
console.log(dari_min_2_end);