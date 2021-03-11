//Find the unique element in an array

function findUniq(arr) {
    // Define a comparison variable with a null value
    // Iterate over the given array
    // Create an Object that stores each number & the count of that number
    // Iterate through the Object and find the key whose value is <1
    let comparisonVariable = null ;
    for (let i=0; i<arr.length; i+=1){

    }
    return comparisonVariable
}

//Test Cases:
// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

//Print in the terminal the return value of the function solution
console.log(findUniq([ 0, 1, 0 ]))