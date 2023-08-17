const prompt = require("prompt-sync")();

console.log("WELCOME TO THE GUESSING GAME");
const randomNumber = Math.floor(Math.random()*101);
let counter = 0;
let userNumber;
do{
    userNumber = prompt("Enter the number: ");
    if(userNumber>randomNumber)
    {
        console.log("Your number is greater.");
    }
    else if(userNumber<randomNumber)
    {
        console.log("Your number is smaller.")
    }
    else
    {
        console.log("Hurray! You got it.")
    }
    counter++;
}while(userNumber!=randomNumber);
let score = 101 - counter;
console.log("Your score is" + score);