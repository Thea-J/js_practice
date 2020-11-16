// Longest Substring Without Repeating Characters - Brute force approach

//Given a string s, find the length of the longest substring without repeating characters.
//string s consists of English letters, digits, symbols and spaces

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    let array_of_substrings = [];
    let substring = ""

    //Split any given string into an array of all possible substrings - including the case of the empty string
    if (s.length == 0) { 
        array_of_substrings.push(s)
        console.log(`Array contains a single empty string with length ${array_of_substrings.length}`)
        return s.length
    } else {
    for (i=0; i<s.length; i++) {
        if (substring.includes(s[i])) {
            array_of_substrings.push(substring)

    //Start the process again from the character AFTER the repeated character FIRST appeared 
            //Find the index of the first instance of the repeated character 
            let repeated_character_index = s.indexOf(s[i])
            console.log(`The index of the first instance of the repeated character is ${repeated_character_index}`)
            console.log(`Index ${i} will go back now`)
    //Start execution from the index after that
            i = repeated_character_index + 1
            console.log(`The current index is ${i}`)
            substring = substring.replace(substring, s[i])
            console.log(`The current substring is ${substring} but it should start from letter V`)
    //Edit above here
            if (i == s.length-1) {array_of_substrings.push(s[i])}
            console.log(`Array is currently ${array_of_substrings}`)

        } else { 
            substring = substring + s[i]   
            console.log(`substring is currently ${substring}`)
            if (i == s.length-1) {array_of_substrings.push(substring)}
            console.log(`At the last character & Array is currently ${array_of_substrings}`)
        }
    }
    }
    //Find the substring in the array that has the longest length property 
    longest_substring_length = 0; 
    for (j=0; j<array_of_substrings.length; j++) {
        if (array_of_substrings[j].length > longest_substring_length) {
            longest_substring_length = array_of_substrings[j].length
        }
    }
    console.log(`The largest substring has length property =  ${longest_substring_length} `)
    return longest_substring_length
};

    //To find the max in an array, get an inspector that is smaller than any possible length value in the array
    //compare  all elements to said inspector & replace the value of the inspector if the elements length property is larger than the inspector 