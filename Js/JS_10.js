const process = require('process');
var number = process.argv[2];
let i = 1;
let j = 1;

console.log(`\nMultiplication Table for ${number} using for loop:\n`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
}

console.log(`\nMultiplication Table for ${number} using while loop:\n`);
while (i <= 10) {
    console.log(`${number} X ${i} = ${number * i}`);
    i++;
}

console.log(`\nMultiplication Table for ${number} using do-while loop:\n`);
do {
    console.log(`${number} X ${j} = ${number * j}`);
    j++;
} while (j <= 10);


