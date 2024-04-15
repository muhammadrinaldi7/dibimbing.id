let angka = [1,4,6,3];


let sum = angka.reduce((result, val) => {
  return result + val;
}, 0);
console.log({sum});

// note: initial value bisa ga di isi
// jadinya, "result" akan bernilai array index ke-0 & "val" akan mulai dari index array ke-1
let min = angka.reduce((result, val) => {

  // console.log({result, val});

  if (val < result) {
    result = val;
  }
  return result

})
console.log({min});

let max = angka.reduce((resultMax, val) => val > resultMax ? val : resultMax);
console.log({max});