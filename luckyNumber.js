// A lucky number has numbers 6 OR 8 in it (i.e. 16, 38, 66)
// An unlucky number either doesn't contain 6 or 8 OR contains both 6 & 8 (i.e. 234, 687)
//  Write a program that computes the number of lucky numbers between [1, 2^(62)]

function luckyNumbers(l, h){
    let count = 0;
    for (i=l; i<=h; i+=1){
        if (i.toString().includes(6) && i.toString().includes(8)){
            null
        }
        else if (i.toString().includes(6) || i.toString().includes(8)){
            count +=1
        }
    } 
    return count
}

// Test cases: 
// let l=1 
// let h=10 //ans = 2 

// let l=58  
// let h=72 //ans = 10 

// let l=362.8 
// let h=3628 //ans = 0
// let l=92871036442 & h=3363728910382456 //ans = 1160053175781729 
// let l=361087 & h=773904 //ans = 224197
// let l=1 
// let h=1000000000000000000 //ans = 264160473575034274


//Fails for larger numbers
 


//Print in the terminal the return value of the function solution
console.log(luckyNumbers(l, h))