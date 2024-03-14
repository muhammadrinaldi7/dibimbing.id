function naikAngkot(penumpang){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];

    for (var i = 0; i < penumpang.length; i++) {
        var penumpangData = {
            penumpang: penumpang[i][0],
            naikDari: penumpang[i][1],
            tujuan: penumpang[i][2],
            bayar: 0
        };

        var startIndex = rute.indexOf(penumpangData.naikDari);
        var endIndex = rute.indexOf(penumpangData.tujuan);

        penumpangData.bayar = Math.abs(endIndex - startIndex) * 2000;

        result.push(penumpangData);
    }

    return result;
}

console.log(naikAngkot([['Melati', 'B', 'F'], ['Herman', 'C', 'D']]));

// [ { penumpang: 'Melati', naikDari: 'B', tujuan: 'F', bayar: 8000 },

//   { penumpang: 'Herman', naikDari: 'C', tujuan: 'D', bayar: 2000 } ]

console.log(naikAngkot([['Lala', 'A', 'D'], ['Andre', 'A', 'F'], ['Saeful', 'B', 'F']]));

// [ { penumpang: 'Lala', naikDari: 'A', tujuan: 'D', bayar: 6000 },

//   { penumpang: 'Andre', naikDari: 'A', tujuan: 'F', bayar: 10000 },

//   { penumpang: 'Saeful', naikDari: 'B', tujuan: 'F', bayar: 8000 } ]

console.log(naikAngkot([])); //[]