// // const buah = ['jambu','nanas','semangka','jeruk','pepaya','pisang'];
// // buah.shift();
// // buah.pop();
// // console.log(buah);


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// let hasil=[];

// for(let i=0; i<matrix.length; i++) {
//     for(let j=0; j<matrix[i].length; j++) {
//         hasil.push(matrix[i][j]);
//     }
    
// }   
// console.log(hasil);

// // matrix.forEach(function(matrix) {
// //     foreach(function(matrix){
// //         hasil += matrix;
// //     });
// // });
// // console.log(hasil);

// let data = [
//     {name: 'lili',kelas: 'lili'}
// ];

// Buatkan sebuah function nilaiMaksimum untuk menyelesaikan tase case dibawah :
// inputan adalah array
// cth: 
// const data = [12, 45, 67, 23, 89, 34];


// // TEST CASES
// console.log(nilaiMaksimum(data)); // Output: 89

const data = [12, 45, 67, 23, 89, 34];
let jumlah = 0;
function nilaiRatarata(){
    for(let i=0; i<data.length; i++){
        jumlah += data[i];
    }
    return jumlah/6;
}
console.log(nilaiRatarata(data));