/**
 * Menentukan jumlah visitor untuk setiap variant A/B testing
 * 
 * ketentuan input: input adalah angka dan wajib lebih dari 0
 * 
 * (Akan di dijelaskan case penggunaannyaa & sedikit penjelasan looping)
 * 
 * Tips: 
 * - pembulatan ke bawah : Math.floor(angkanya)
 * - pembulatan ke atas : Math.ceil(angkanya)
 */

/**
 * Example input & output:
 * 
 * input:
 * totalVariant = 3
 * targetVisitor = 8
 * 
 * output:
 * Variant ke-1 akan mendapatkan 3 visitor
 * Variant ke-2 akan mendapatkan 3 visitor
 * Variant ke-3 akan mendapatkan 2 visitor
 * 
 * -----------------------------------------
 * 
 * input:
 * totalVariant = 3
 * targetVisitor = 2
 * 
 * output:
 * Variant ke-1 akan mendapatkan 1 visitor
 * Variant ke-2 akan mendapatkan 1 visitor
 * Variant ke-3 akan mendapatkan 0 visitor
 * 
 */


const prompt = require('prompt-sync')();

let totalVariant = prompt('Ada berapa variant? ');
totalVariant = parseInt(totalVariant);

let targetVisitor = prompt('Target/Total visitor untuk pengujian A/B testing? ');
targetVisitor = parseInt(targetVisitor);


for (let i = 1; i <= totalVariant; i++) {


  // (start) lengkapi kode ini:

  

  // (end) lengkapi kode ini:

  
  console.log(`Variant ke-${i} akan mendapatkan ${visitor} visitor`);
}

