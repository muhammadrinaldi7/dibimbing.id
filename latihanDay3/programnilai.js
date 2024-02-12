const prompt = require('prompt-sync')();

const nilai = parseInt(prompt("Masukkan Nilai Anda:"));

if(nilai<60){
    console.log('Nilai Anda Adalah D');
}else if(nilai<75){
    console.log('Nilai Anda Adalah C');
}else if(nilai<85){
    console.log('Nilai Anda Adalah B');
}else{
    console.log('Nilai Anda Adalah A');
}


