class Hitung {
    constructor(val) {
      this.val = val;
    }
  
    hasil() {
      return this.val;
    }
  
    perkalian() {
      return this.val * this.val;
    }
  }
  
  class Persegi extends Hitung {
    constructor(p, l) {
      super(p * l);
      this.p = p;
      this.l = l;
    }
  
    hitungLuas() {
      return this.p * this.l;
    }
  }
  
  class Lingkaran extends Hitung {
    constructor(r) {
      super(r);
      this.r = r;
    }
  
    hitung() {
      return 22 / 7 * this.r * this.r;
    }
  }
  
  // Contoh penggunaan
  const persegi = new Persegi(4, 5);
  console.log("Luas Persegi:", persegi.hitungLuas()); 
  
  const lingkaran = new Lingkaran(7);
  console.log("Luas Lingkaran:", lingkaran.hitung());
  