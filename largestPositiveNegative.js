function solution(A) {
    let storageArray = []
    let maxValue = 0


    for(let i=0; i<A.length; i+=1){
        if ( A[i]>0 && A.includes(-A[i]) ){
            storageArray.push(A[i])
        } 
    };

    for (let j=0; j<storageArray.length; j+=1) {
        if (storageArray[j] > maxValue){
            maxValue = storageArray[j]
        }
    }

    return maxValue
}


let arr = [1, 2, 3, -4]

//Print in the terminal the return value of the function solution
console.log(solution(arr))

// Test cases: arr = [1, -1, 3, 5]  , [3, -2, 2, 5, -3] , [1, 1, 2, -1, 2, -1] , [1, 2, 3, -4]