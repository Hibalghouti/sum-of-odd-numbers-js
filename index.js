const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(x){
    const number=parseInt(x);
    let sum=0;
    for(i=1;i<=number;i++){
        sum=sum+i

    }
    console.log(`The sum of all odd numbers up to ${number} is: ${sum}`);
    rl.close();


});