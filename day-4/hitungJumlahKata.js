function hitungJumlahKata(kata) {
    let jumlahKata = 0;


    for (let i = 0; i < kata.length; i++) {
     
        if (kata[i] !== ' ' && (i === 0 || kata[i - 1] === ' ')) {
            jumlahKata++;
        }
    }

    return jumlahKata;
}
console.log("Jumlah kata:", hitungJumlahKata('I have a dream')); 
console.log("Jumlah kata:", hitungJumlahKata('Never eat shredded wheat or cake')); 
console.log("Jumlah kata:", hitungJumlahKata('A song to sing')); 
console.log("Jumlah kata:", hitungJumlahKata('I')); 
console.log("Jumlah kata:", hitungJumlahKata('I believe I can code')); 
