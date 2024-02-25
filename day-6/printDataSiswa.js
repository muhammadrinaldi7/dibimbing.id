const data = {

    students: [
  
      ["0001", "Ade Alamsyah ", "Jakarta", "21/05/2000", ["Membaca", "melukis", "menari"]],
  
      ["0002", "Roman Alamsyah ", "Bandung", "15/01/1996", "Sepak bola"],
  
      ["0003", "Ira Alamsyah ", "Bandar Lampung", "01/08/1999", ["Memasak", "berkebun"]],
  
    ],
  
    total: 3,
  
  };

  function PrintDataSiswa(data) {
    function formatTanggal(tanggal) {
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      const parts = tanggal.split("/");
      const day = parts[0];
      const month = months[parseInt(parts[1]) - 1];
      const year = parts[2];
      return day + " " + month + " " + year;
    }
  
    for (var i = 0; i < data.students.length; i++) {
      var student = data.students[i];
      var no = student[0];
      var nama = student[1];
      var tempat = student[2];
      var tanggal_lahir = formatTanggal(student[3]);
      var hobi = student[4];
  
      if (typeof hobi !== "string") {
        var hobiStr = "";
        for (var j = 0; j < hobi.length; j++) {
          hobiStr += hobi[j];
          if (j !== hobi.length - 1) {
            hobiStr += ", ";
          }
        }
        hobi = hobiStr;
      }
  
      console.log("# Siswa " + (i + 1));
      console.log(" - no: " + no);
      console.log(" - nama: " + nama);
      console.log(" - tempat, tanggal lahir: " + tempat + ", " + tanggal_lahir);
      console.log(" - hobi: " + hobi + "\n");
    }
  }
  
  PrintDataSiswa(data);
  