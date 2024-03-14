function shoppingTime(memberId, money) {
    var hargaBarang = {
        'Gula Pasir': 15000,
        'Beras': 12000,
        'Mie Instan': 2500,
        'Minyak Goreng': 18500,
        'Telor Ayam': 24600
    };

    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }

    if (money < 2500) {
        return 'Mohon maaf, uang tidak cukup';
    }

    var listPurchased = [];
    var changeMoney = money;

    var barang = Object.keys(hargaBarang).sort(function(a, b) {
        return hargaBarang[b] - hargaBarang[a];
    });

    for (var i = 0; i < barang.length; i++) {
        if (changeMoney >= hargaBarang[barang[i]]) {
            listPurchased.push(barang[i]);
            changeMoney -= hargaBarang[barang[i]];
        }
    }

    return {
        memberId: memberId,
        money: money,
        listPurchased: listPurchased,
        changeMoney: changeMoney
    };

}


console.log(shoppingTime('12kTsasdAl', 75000));

//{ memberId: 12kTsasdAl,

// money: 75000,

// listPurchased:

//  [ 'Telor Ayam',

//    'Minyak Goreng',

//    'Gula Pasir',

//    'Beras',

//    'Mie Instan' ],

// changeMoney: 2400 }

console.log(shoppingTime('13KasdfG3D', 30000));

//{ memberId: '13KasdfG3D',

// money: 30000,

// listPurchased:

//  [ 'Telor Ayam', ‘Mie Ayam’ ],

// changeMoney: 2900 }

console.log(shoppingTime('', 25700)); 
             //Mohon maaf, toko X hanya berlaku untuk member saja

console.log(shoppingTime('234JdRxa53', 1500)); //Mohon maaf, uang tidak cukup

console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja