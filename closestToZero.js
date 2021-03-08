
//Return the temperature closest to 0 
//Works with -273 alone
//Works with 5526 alone 

function closestToZero(input){
    
    let positivesArray = [];
    let negativesArray = [];
    let positivesInspector = 0;
    let negativesInspector = 0;

    //If there are no inputs return 0
    if (input.length===0){ return 0}
    
    //Separate the inputs into the array of positive and array of negatives
    for(let i=0; i<input.length; i+=1){
        if (input[i]>0){ 
            positivesArray.push(input[i])
            positivesInspector = positivesInspector += input[i]
        }
        else if (input[i]<0){
            negativesArray.push(input[i])
            negativesInspector = negativesInspector += input[i]
        }
        else {return 0} //If any inputs are 0, return 0
    }
    
    for (let k=0; k<positivesArray.length; k+=1) {
        if (positivesArray[k] < positivesInspector){
            positivesInspector = positivesArray[k]
        }
    }
    
    for (let l=0; l<negativesArray.length; l+=1) {
        if (negativesArray[l] > negativesInspector){
            negativesInspector = negativesArray[l]
        }
    }

    // If 2 numbers are equally close to 0, return the +ve integer
    if (negativesInspector + positivesInspector === 0){
        return positivesInspector
    }
    // If the input array only contains -ve numbers, return the negativesInspector
    else if (positivesArray.length === 0 ){ 
        return negativesInspector
    }
    // If the input array only contains +ve numbers, return the positivesInspector
    else if (negativesArray.length === 0 ){
        return positivesInspector
    }
    // If the +ve inspector is greater than the modulus of the -ve inspector, return the negativesInspector
    else if (positivesInspector > 0-(negativesInspector) && negativesArray.length > 0) {
        return negativesInspector
    }
    // If the +ve inspector is LESS than the modulus of the -ve inspector, return the negativesInspector
    else if (positivesInspector < 0-(negativesInspector) && positivesArray.length > 0) {
        return positivesInspector
    }
}

// Test cases: 
// let inputs=[7, 5, 9, 1, 4] 
// let inputs=[-15, -7, -9, -14, -12] 
// let inputs = [-10, -10] 
// let inputs=[15, -7, 9, 14, 7, 12]
// let inputs = []
// let inputs = [-1, -2, 8, 4, 5]
// let inputs = [-273]
// let inputs = [5526]
let inputs = [-11, -21, 8, 4, 5, -6]

//Print in the terminal the return value of the function solution
console.log(closestToZero(inputs))

