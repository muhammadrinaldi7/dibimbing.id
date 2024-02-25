function mengelompokkanAngka(arr) {
    let kelbagi2 = [];
    let kelprima = [];
    let kelbagi3 = [];
  
    // Function to check if a number is prime
    function cekPrima(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num % 3 === 0) {
        kelbagi3.push(num);
      } else if (num % 2 === 0) {
        kelbagi2.push(num);
      } else if (cekPrima(num) || num === 1) {
        kelprima.push(num);
      }
    }
  
    return [kelbagi2, kelprima, kelbagi3];
  }
  
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151, 1 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  