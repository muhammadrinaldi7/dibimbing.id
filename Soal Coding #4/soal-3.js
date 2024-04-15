/**
 * groupBy
 */

// // info : 

// // Object destructuring, assigning to different variable name

// const o = { p: 42, q: true, r: "halo" };

// const variable = 'r'; // coba ganti jadi p atau q, lalu lihat di console.log
// const { [variable]: extract, ...rest } = o;

// console.log(extract);
// console.log(rest);


/* rizky
function groupBy(arr, property) {
  // Note : asumsinya, "property" pasti ada di tiap item dari "arr"
  
  // tulis code di sini
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const { [property]: key, ...rest } = item;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(rest);
  }

  return result;
  
}
*/

/* // orlando
function groupBy(arr, property) {
  // Note : asumsinya, "property" pasti ada di tiap item dari "arr"
  
  // tulis code di sini
  
  const result = {};
  for (const item of arr) {
    const key = item[property];
    
    if (!result[key]) {
      result[key] = [];
    }
   
    const { [property]: extract, ...newItem } = item;
    result[key].push(newItem);
  }
  return result;
  
}
*/

/* // ihwan (clone object, lalu delete property-nya)
function groupBy(arr, key) { // buat fungsi dengan parameter arr untuk menampung students dan key untuk apa yg dicari
  const result = {}; // buat variabel result berisi object kosong untuk menyimpan hasil proses

  for (let i = 0; i < arr.length; i++) { // selama i kurang dari panjang array students
    const item = arr[i]; // inisialisasi item dengan nilai array ke i
    const keyValue = item[key]; //inisialisasi keyValue dengan key yang ingin dicari dari array ke i

    if (!result[keyValue]) {  // jika result[keyValue] bukan sebuah array
      result[keyValue] = []; // maka inisialisasi jadi array kosong
    }

    // Membuat objek baru tanpa properti 'score'
    const newItem = { ...item }; 
    delete newItem[key];

    // menambahkan objek baru ke dalam array yang sesuai dengan keyValue dalam objek result
    result[keyValue].push(newItem); 
  }

  return result; // kembalikan nilai result
}
*/

// darryl
function groupBy(arr, property) {
  const grouped = {}; // {'85' : [{name:"Arkan", age: 20},{name:"Ayyasyi", age: 25},{name:"Farhan", age: 20}], '90': [{name:"Fauzan", age: 25}]}
  
  for (const item of arr) {
    
    const { [property]: value, ...rest } = item; // ex: property = 'score' & value = 85 & rest = {name:"Farhan", age: 20}

    if (!grouped[value]) {
      grouped[value] = [];
    }

    grouped[value].push(rest);
  }
  
  return grouped;
}

const students = [
  {name:"Arkan", score: 85, age: 20},
  {name:"Fauzan", score: 90, age: 25},
  {name:"Ayyasyi", score: 85, age: 25},
  {name:"Farhan", score: 85, age: 20},
]

/*
Expected output (scorenya hilang):
{
  '85': [
    { name: 'Arkan', age: 20 },
    { name: 'Ayyasyi', age: 25 },
    { name: 'Farhan', age: 20 }
  ],
  '90': [ { name: 'Fauzan', age: 25 } ]
}
*/
console.log(groupBy(students, 'score'));

console.log('------------------------------------------------------------------');

/*
Expected output (age nya hilang):
{
  '20': [ { name: 'Arkan', score: 85 }, { name: 'Farhan', score: 85 } ],
  '25': [ { name: 'Fauzan', score: 90 }, { name: 'Ayyasyi', score: 85 } ]
}
*/
console.log(groupBy(students, 'age'));