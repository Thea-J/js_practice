// Longest Substring Without Repeating Characters - Brute force approach

//Given a string s, find the length of the longest substring without repeating characters.
//string s consists of English letters, digits, symbols and spaces

//Find the substring in the array that has the longest length property 
function longest_substring_from_array(array_of_substrings) {
    longest_substring_length = 0; 
    for (j=0; j<array_of_substrings.length; j++) {
        if (array_of_substrings[j].length > longest_substring_length) {
            longest_substring_length = array_of_substrings[j].length
        }
    }
    // console.log(`The largest substring has length property =  ${longest_substring_length} `)
    return longest_substring_length
}

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    let array_of_substrings = [];
    let substring = ""

    //Split any given string into an array of all possible unique substrings - including the case of the empty string
    if (typeof(s) == "string" && s.length == 0) { 
        array_of_substrings.push(s)
        return s.length
    } else {
        for (let i=0; i<s.length; i++) {
            // If the substring includes the current character, stop execution, add the substring to the array_of_substrings
            // Find where the most recent repeated character is in the string & restart execution at the character DIRECTLY AFTER that
            if (substring.includes(s[i])) {
                array_of_substrings.push(substring)
                let repeated_character_index = s.slice(0,i).lastIndexOf(s[i])
                // console.log(`FOUND A REPEATED CHARACTER ${s[i]} AT Index ${i} THIS WAS PREVIOUSLY AT INDEX ${repeated_character_index}`)
                i = repeated_character_index + 1
                // console.log(`Going back to index ${i}`)
                substring = substring.replace(substring, s[i])
                if (i == s.length-1) {array_of_substrings.push(s[i])}
            } else { 
                substring = substring + s[i]   
                if (i == s.length-1) {array_of_substrings.push(substring)}
            }
        }
    //  console.log(`Array is currently ${array_of_substrings}`)
    }
    return longest_substring_from_array(array_of_substrings)
};

// Test cases:
// let s = "abcabcbb"
// let s = "bbbbb" 
// let s = "pwwkew" 
// let s = "" 
// let s = "dvdf" 

