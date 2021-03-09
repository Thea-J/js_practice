// Return the sum of the series (1 + 1/4 + 1/7 + 1/10 + 1/13 + ...) up to nth term 
// If the given value is 0 then it should return 0.00
// Round answers to 2 decimal places & return it as String

function SeriesSum(n){
    let sum = 1.00;
    let iterationStep = 3;

    // If n is 0 or 1 return 0.00 or 1.00 respectively
    if (n === 0 || n === 1){
        return`${n.toFixed(2)}` //Must use .toFixed() otherwise JS will round 0.00 to 0
    } 
    
    //Start iteration from n=2
    //Multiply each iterationStep with i - in the series definition, in each iteration 3 is added to the denominator
    else {
        for (let i=1; i<n; i+=1){
            sum += 1.00/(1+(iterationStep*i))        
        }
        return`${sum.toFixed(2)}` 
    } 
}

//Test Cases:
// Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")



//Print in the terminal the return value of the function solution
console.log(SeriesSum(5))