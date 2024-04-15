const fruits = [`Apple`,`Cherry`,`Manggis`,`Durian`,`Mangga`];
const targetFruit = `Durian`;
const hasil = fruits.indexOf(targetFruit);

console.log(hasil);

const angka = [4,8,22,16,5];
const temukanAngka = angka.find(val => val > 10);
console.log(temukanAngka);

const hasilFindindex = fruits.findIndex((val,i) => {
    console.log(val+ i);
} ); 