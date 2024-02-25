function angkaPalindrome(angka) {
    // Cek angka palindrome
    function cekPalindrome(num) {
      let reversed = '';
      let strNum = num.toString();
      for (let i = strNum.length - 1; i >= 0; i--) {
        reversed += strNum[i];
      }
      return reversed === strNum;
    }
  
    // Cek jika angka panjang nya 1 maka akan ditambah 1
    if (angka < 10) {
      return angka + 1;
    } else if (cekPalindrome(angka)) {
      return angka;
    }
  
    // mencari palindrome berikutnya
    function cariPalindrome(num) {
      let next = num + 1;
      while (!cekPalindrome(next)) {
        next++;
      }
      return next;
    }
  
    return cariPalindrome(angka);
  }
  
  console.log(angkaPalindrome(8));   // 9
  console.log(angkaPalindrome(10));  // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000));// 1001
  