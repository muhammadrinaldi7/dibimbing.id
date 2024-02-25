function MajoritySweeper(arr) {

    // Buat objek untuk menyimpan jumlah kemunculan setiap angka
    const counts = {};
    let palingbanyak = [];
    let nilaikeluar = 1;

    // Menghitung jumlah kemunculan setiap angka
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
      if(counts[num]>nilaikeluar){
        palingbanyak = num;
        nilaikeluar = counts[num];
      }
    }
    
    // Membuat array baru ke variabel hasil dengan mengecualikan nilai yg paling banyak muncul
    const hasil = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]!==palingbanyak){
            hasil.push(arr[i]);
        }
    }
   
    return hasil;
  }
  

  console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]

  console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
  
  console.log(MajoritySweeper([2, 2])) // []
  
  console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]
  