//Practice code goes here

//example: let string = "a b c a b c b b" < lengthOfLongestSubstring = 3 for substring "vdf"
//example: let string = "0 1 2 3 4 5 6 7"
 // 1: sub = "abc" stop at i=3 back to i=1
 // 2: sub = "bca" stop at i=4 back to i=2
 // 3: sub = "cab" stop at i=5 back to i=3
 // 4: sub = "abc" stop at i=6 back to i=1 << should be going back to i=5

 
//Do not go back to an index you have already returned to 
//Store all the values of i you go back to 
//When returning to an index, check if you have already gone back to it
// - If not then proceed as planned
// - If you have then find the next possible index you can go to 

let array_of_returned_to_indices = []

    //Start the process again from the character AFTER the repeated character FIRST appeared 
   
            //Find the index of the first instance of the repeated character 
            let first_instance_of_repeated_character_index = s.indexOf(s[i])
            console.log(`The index of the first instance of the repeated character is ${repeated_character_index}`)
            console.log(`Index ${i} will go back now`)

    //Start execution from the index after that
            i = first_instance_of_repeated_character_index + 1
            array_of_returned_to_indices.push(i)
            console.log(`The current index is ${i}`)
            substring = substring.replace(substring, s[i])
            console.log(`The current substring is ${substring} but it should start from letter V`)

            if (array_of_returned_to_indices.includes(first_instance_of_repeated_character_index + 1)) {}
            else {
                i = first_instance_of_repeated_character_index + 1
                array_of_returned_to_indices.push(i)
                console.log(`We have returned to the following indices ${array_of_returned_to_indices} `)
                substring = substring.replace(substring, s[i])
                console.log(`The current substring is ${substring} but it should start from letter V`)
            }

            //Once you've found a repeat charachter
            //Iterate over the string & find all possible instances of it & store it in an array
            //When going back to an index, check the array_of_returned_to_indices & go to the next index that you have not returned to  