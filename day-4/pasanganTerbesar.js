function pasanganTerbesar(angka) {
   let angkaString = angka.toString();
   let terbesarSementara = 0;

   for(let i = 0;i < angkaString.length;i++) {

    let pasanganAngka = parseInt(angkaString[i]+ angkaString[i+1]);

    if(pasanganAngka>terbesarSementara){
        terbesarSementara = pasanganAngka;
    }

   }
   return terbesarSementara;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
