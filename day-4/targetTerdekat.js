function targetTerdekat(target) {
    let targetX = target.indexOf('x');
    let pengejar = target.indexOf('o');
    let jarak = 0;

    if(pengejar === -1 || targetX === -1){
        return jarak;
    }

    jarak = Math.abs(targetX - pengejar);
    
    for (let i = pengejar + 1; i < target.length; i++) {
        if (target[i] === 'x') {
            jarak = Math.min(jarak, i - pengejar);
            break;
        }
    }

    for (let i = pengejar - 1; i >= 0; i--) {
        if (target[i] === 'x') {
            jarak = Math.min(jarak, pengejar - i);
            break;
        }
    }
    return jarak;
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); //3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
