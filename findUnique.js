//Find the unique element in an array

function findUniq(arr) {
    let numbersTally = {};
    // Iterate over the given array
    for (let i=0; i<arr.length; i+=1){
        let element = arr[i];
        // Create an Object that stores each number & the count of that number
        if (numbersTally[element]){
            numbersTally[element] += 1;
        }
        else {numbersTally[element] = 1}
    }
    // Iterate through the Object and return the key whose value is = 1
    for (const number in numbersTally){
        if (numbersTally[number] === 1){
            return number;
        }
    }
}

//Test Cases:
// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

//Print in the terminal the return value of the function solution
console.log(findUniq([ 0, 1, 0 ]))