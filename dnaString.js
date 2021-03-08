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