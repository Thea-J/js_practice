// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

    // Define a comparisson variable
    // for each comparrison variable, check the entire array
    // Iterate over the given array
    //If there is an element that is the same as the comparrison then increase it by 1
    //loop over the array again
    //if there isnt an element the same as the comparrison then return the comparisson 

    
    //The array can have between 1 element and 100,000 elements
    //Each element can be between [-1000000, 1000000]

    
    function solution(array) {
        let comparisonVariable = 1;
    
    
        for(let i=0; i<array.length; i+=1){
    
           if (array[i] === comparisonVariable) {
            comparisonVariable +=1
            i = 0
            }
           
        };
    
        return comparisonVariable
    }

    let arr = [1, 3, 4]

//Print in the terminal the return value of the function solution
console.log(solution(arr))

//Test cases: [1, 3, 6, 4, 1, 2] ,  [1, 2, 3] , [−1, −3]