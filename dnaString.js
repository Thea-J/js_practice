function DNAStrand(dna){
    // Given a string of dna, return the complement string, where "A" & "T" are interchangeable as are "C" and "G" 

    //Define an empty string
    let complementString = "";

    // Iterate over the string dna 
    // Populate the string complementString with characters from the string dna
    // Wite conditionals such that substrings "A" & "T" are swapped and substrings "C" and "G" 

    for (let i=0; i<dna.length; i+=1){

        if (dna[i] === "A"){
            complementString = complementString.concat("T")
        }
        else if (dna[i] === "T"){
            complementString = complementString.concat("A")
        }
        else if (dna[i] === "C"){
            complementString = complementString.concat("G")
        }
        else if (dna[i] === "G"){
            complementString = complementString.concat("C")
        }
        else { complementString = complementString.concat(dna[i])
        }
    }
    return complementString
}

//Test Cases:
//Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
//Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
//Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

//Print in the terminal the return value of the function solution
console.log(DNAStrand("AAAA"))


// ANOTHER SMART WORKING SOLUTION 

function SwitchDNA(dna){

    //Define an empty string called newDNA
    let newDNA = ""

    //Define the Object dnaPairs that pairs a character with its complement character
    let dnaPairs = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    }

    //Declare a for loop that iterates over the string dna
    // and populates the string newDNA using the key-value pairs from the Object dnaPairs 
    for (let i=0; i<dna.length; i+=1){
        newDNA += dnaPairs[dna[i]]
    }
    return newDNA
}

//Print in the terminal the return value of the function solution
console.log(SwitchDNA("GTAT"))
