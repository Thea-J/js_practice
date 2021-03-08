// Return the fastest time from HH:MM:SS

function fastestTime(time){
    let shortestTime = [23, 59, 59]
    
    for (let k=0; k<shortestTime.length; k+=1) {
        if (shortestTime[k] > parseInt(timeArray[k])){
            shortestTime = timeArray
        }
    }

}



// Test cases: 
let N = 4
let t1 = 10:15:46
let t2 = 03:59:08
let t3 = 04:00:08
let t4 = 03:59:09

// let l=58  
// let h=72 //ans = 10 

// let l=362.8 
// let h=3628 //ans = 0
// let l=92871036442 & h=3363728910382456 //ans = 1160053175781729 
// let l=361087 & h=773904 //ans = 224197
// let l=1 
// let h=1000000000000000000 //ans = 264160473575034274


 


//Print in the terminal the return value of the function solution
console.log(fastestTime(time))