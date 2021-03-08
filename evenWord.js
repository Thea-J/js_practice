
function solution(string) {
    let count = 0;
    let stringObject= {}

    for(let i=0; i<string.length; i+=1){
        if (stringObject[string[i]]){
            stringObject[string[i]]+=1
        } 
        else {stringObject[string[i]] = 1}
        
    };

    for (const key in stringObject) {
        if (stringObject[key]%2 !== 0){
            count+=1
        }
    }


    return count
}


let str = "a cb cbb a"

//Print in the terminal the return value of the function solution
console.log(solution(str))

// Test cases, "aaaa"  ,  "axxaxa"  , "acbcbba"  , "a cb cbb a"