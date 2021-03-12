// Return the count of distinct repeated characters in a string 
// Edge cases to consider: empty string? , case sensitive? , numbers?, other data/character types?

function duplicateCount(text){
    // Define an empty Object characterTally
    let characterTally = {};
    // Define an variable count
    let count = 0;
    // Convert the input sting to uppercase
    text = text.toUpperCase()

    // Iterate through the input string and populate the Object with distinct characters and their count 
    for (let i=0; i<text.length; i+=1){
        let character = text[i];
        characterTally[character] = characterTally[character] + 1 || 1
    }
    // Iterate through the Object and return the key whose value is > 1
    for (const key in characterTally){
        if (characterTally[key] > 1){
            count +=1;
        }
    }
    return count
}

//Test Cases:
// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("aA11"), 2)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")



//Print in the terminal the return value of the function solution
console.log(duplicateCount(""))
