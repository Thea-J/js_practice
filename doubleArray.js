//Given an array of integers, return a new array with each value doubled
function maps(x){ 
    let doubledArray = x.map(element => {return element*2})
    return doubledArray
}


//Test Cases:
// Test.describe("Example tests",()=>{
//     Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
//     Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
//     Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
// });

//Print in the terminal the return value of the function solution
console.log(maps([4, 1, 1, 1, 4]))

// ANOTHER SMART WORKING SOLUTION 

function doubled(x){ 
    let twoTimes = []
    x.forEach((element) => { return twoTimes.push(element*2) })
    return twoTimes
}

//Print in the terminal the return value of the function solution
console.log(doubled([2, 2, 2, 2, 2, 2]))