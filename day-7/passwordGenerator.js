function passwordGenerator(password){
    if (password.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    var encryptedPassword = '';

    for (var i = password.length - 1; i >= 0; i--) {
        var char = password[i];
        if (char === ' ') {
            encryptedPassword += '&';
        } else {
            if (char === char.toUpperCase()) {
                char = char.toLowerCase();
            } else {
                char = char.toUpperCase();
            }
            if ('aiueoAIUEO'.indexOf(char) !== -1) {
                char = String.fromCharCode(char.charCodeAt(0) + 1);
            }
            encryptedPassword += char;
        }
    }

    return encryptedPassword;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'

console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'

console.log(passwordGenerator('Alexei')); // 'JFXFLb'

console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'