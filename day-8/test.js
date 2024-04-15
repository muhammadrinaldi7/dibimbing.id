// Contoh objek
const dataObjek = {
    nama: 'John Doe',
    umur: 30,
    pekerjaan: 'Developer'
  };
  
  // Inisialisasi array kosong
  const dataArray = [];
  
  // Perulangan untuk mengubah objek menjadi array
  for (const key in dataObjek) {
    if (dataObjek.hasOwnProperty(key)) {
      dataArray.push(dataObjek[key]);
    }
  }
  
  console.log('Hasil array:', dataArray);
  