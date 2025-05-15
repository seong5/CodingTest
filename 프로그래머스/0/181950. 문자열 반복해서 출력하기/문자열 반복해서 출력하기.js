const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; // string, 5 를 입력했을 때.

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
     str = input[0]; 
     n = Number(input[1]);
    
    let result = "";
    for (let i = 0; i < n; i++){
        result += str;
    }
    console.log(result)
});


