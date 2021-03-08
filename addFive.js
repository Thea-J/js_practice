function solution(N) {
    if (N > 0) { let stringN = N.toString() }
    else {let stringN = -N.toString()}
    
    let maxValue = N; 
    let storageArray = []

    for(let i=0; i<stringN.length; i+=1){
        storageArray.push(stringN.replace(stringN[i], "5"))
    };

    for (let j=0; j<storageArray.length; j+=1) {
        if (storageArray[j] > maxValue){
            maxValue = storageArray[j]
        }
    }
    
    if (N > 0) { return maxValue }
    else {return -maxValue}
}

let numb = 268

//Print in the terminal the return value of the function solution
console.log(solution(numb))

// Test cases, 268  ,  670  , 0  , -999