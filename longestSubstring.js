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
    console.log(`The largest substring has length property =  ${longest_substring_length} `)
    return longest_substring_length
}

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    let array_of_substrings = [];
    let substring = ""

    //Split any given string into an array of all possible substrings - including the case of the empty string
    if (typeof(s) == "string" && s.length == 0) { 
        array_of_substrings.push(s)
        return s.length
    } else {
        for (let i=0; i<s.length; i++) {
            if (substring.includes(s[i])) {
                array_of_substrings.push(substring)
                let repeated_character_index = s.slice(0,i).lastIndexOf(s[i])
                console.log(`FOUND A REPEATED CHARACTER ${s[i]} AT Index ${i} THIS WAS PREVIOUSLY AT INDEX ${repeated_character_index}`)
                i = repeated_character_index + 1
                console.log(`Going back to index ${i}`)
                substring = substring.replace(substring, s[i])
                if (i == s.length-1) {array_of_substrings.push(s[i])}
            } else { 
                substring = substring + s[i]   
                if (i == s.length-1) {array_of_substrings.push(substring)}
            }
        }
     console.log(`Array is currently ${array_of_substrings}`)
    }
     longest_substring_from_array(array_of_substrings)
};
