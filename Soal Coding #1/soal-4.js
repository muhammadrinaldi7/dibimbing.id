/**
 * Menentukan variant A/B testing yang muncul
 * 
 * ketentuan input: input adalah angka dan wajib lebih dari 0
 * 
 * (Akan di dijelaskan case penggunaannyaa)
 */


const prompt = require('prompt-sync')();

let totalVariant = prompt('Ada berapa variant? ');
totalVariant = parseInt(totalVariant);

let currentVisitor = prompt('Sekarang visitor ke berapa? ');
currentVisitor = parseInt(currentVisitor);


// (start) lengkapi kode ini:
let showVariant = currentVisitor % totalVariant;

// (end) lengkapi kode ini:


console.log(`Variant yang muncul adalah variant ke-${showVariant}`);