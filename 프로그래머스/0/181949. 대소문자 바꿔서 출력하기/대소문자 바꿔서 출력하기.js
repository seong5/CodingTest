const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    result = ''
    
    for(let i = 0; i < str.length; i++) {
        const alpha = str[i];
        if (alpha === alpha.toUpperCase()) {
            result += alpha.toLowerCase();
        } else {
            result +=alpha.toUpperCase();
        }
    }
    console.log(result)
});
