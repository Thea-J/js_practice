// Longest Substring Without Repeating Characters - Brute force approach

//Given a string s, find the length of the longest substring without repeating characters.
//string s consists of English letters, digits, symbols and spaces

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    array_of_substrings = [];
    let substring = ""

    if (s.length == 0) { 
        array_of_substrings.push(s)
        console.log(`Array length is currently ${array_of_substrings.length}`)
    } else {
    for (i=0; i<s.length; i++) {
        if (substring.includes(s[i])) {
            array_of_substrings.push(substring)
            substring = substring.replace(substring, s[i])
            if (i == s.length-1) {array_of_substrings.push(s[i])}
            console.log(`Array is currently ${array_of_substrings}`)
        } else { 
            substring = substring + s[i]    
            console.log(`substring is currently ${substring}`)
            console.log(`i is currently ${i}`)
        }
    }
    }
    //Once all characters have been checked find the substring in the array that has the longest length property 
    //Return the length of longest substring
};