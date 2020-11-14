// Longest Substring Without Repeating Characters - Brute force approach

//Given a string s, find the length of the longest substring without repeating characters.
//string s consists of English letters, digits, symbols and spaces

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    array_of_substrings = [];
    let substring = ""
    //Check each character in a string
    for (i=0; i<s.length; i++) {
        if (substring.includes(s[i])) {
            array_of_substrings.push(s[i])
            console.log(array_of_substrings)
        } else {
            substring = substring + s[i]
            console.log(`substring is currently ${substring}`)
        }
    }

    //For each new character push it into an array of substrings
    //If a character is repeated in a substring break execution & start a new substring to push into the array
    //Once all characters have been checked find the substring in the array that has the longest length property 
    //Return the length of longest substring
};