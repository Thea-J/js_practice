/* Write a program that prints the numbers from 1 - 100
For multiples of 3, print string "Fizz" instead of the number
For multiples of 5, print string "Buzz" instead of the number
For multiples of 3 & 5, print string "FizzBuzz" instead of the number */

// Declare a function called fizzbuzz
// Declare a for loop that iterates between 1 & 100 inclusive
// Define a conditional statement that checks if each value is a multiple of 3, 5 or both 3 & 5
// Print a number or string dependant on the factors of each number 

const fizzbuzz = (bothMultiples, multipleOfThree, multipleOfFive) => {
    for (let i=1; i<=100; i+=1){
        if (i%3 == 0 && i%5 == 0) {console.log(bothMultiples)}
        else if (i%3 == 0) {console.log(multipleOfThree)}
        else if (i%5 == 0) {console.log(multipleOfFive)}
        else {(console.log(i))}
    }   
}

fizzbuzz("FizzBuzz", "Fizz", "Buzz");