const data = [12, 45, 67, 23, 89, 34];
let jumlah = 0;
function nilaiRatarata(){
    for(let i=0; i<data.length; i++){
        jumlah += data[i];
    }
    return jumlah/6;
}
console.log(nilaiRatarata(data));