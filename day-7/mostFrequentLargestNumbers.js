function mostFrequentLargestNumbers(arr){
    if (arr.length === 0) {
        return '';
    }

    var max = arr[0];
    var count = 1;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            count = 1;
        } else if (arr[i] === max) {
            count++;
        }
    }

    return `angka paling besar adalah ${ max } dan jumlah kemunculan sebanyak ${ count } kali`;
}



console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));

//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

 

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));

//'angka paling besar adalah 135 dan jumlah kemunculan sebanyak 1 kali'

 

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));

//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

 

console.log(mostFrequentLargestNumbers([]));

//''