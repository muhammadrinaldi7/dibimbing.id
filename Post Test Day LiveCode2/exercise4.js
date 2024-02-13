// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates (str) {
    //write your code here
    
    //untuk menyimpan hasil akhir huruf
    let hasil = [];
    //penampungan untuk menampung huruf yg diseleksi
    let hurufmuncul = {};

    for(let i = 1;i < str.length;i++){
        //penampung sementara huruf yg muncul
        let huruf = str[i];
        //disini terjadi pengecekkan jika huruf belum ada di penampung yg telah diseleksi 
        //maka akan di tambahkan huruf tsb ke variabel hasil
        if(!hurufmuncul[huruf]){
            hasil.push(huruf );
            hurufmuncul[huruf] = true;
        }
    }
    return hasil;
};

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"))
console.log(removeDuplicates("RRRRROOOAAQPPP"))