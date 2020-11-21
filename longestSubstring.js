// Longest Substring Without Repeating Characters - Brute force approach

//Given a string s, find the length of the longest substring without repeating characters.
//string s consists of English letters, digits, symbols and spaces

//Declare the function lengthOfLongestSubstring via the function expression
var lengthOfLongestSubstring = function(s) {
    let array_of_substrings = [];
    let substring = ""
    let string_copy = ""

    //Split any given string into an array of all possible substrings - including the case of the empty string
    if (typeof(s) == "string" && s.length == 0) { 
        array_of_substrings.push(s)
        return s.length
    } else {
    for (i=0; i<s.length; i++) {
        i == 0 ? string_copy : string_copy = string_copy + s[i-1]
        // console.log(`AT INDEX ${i} string_copy is ${string_copy}`)
        if (substring.includes(s[i])) {
            array_of_substrings.push(substring)
    //Start the process again from the character AFTER the repeated character MOST RECENTLY appeared 
    //Find the index of the most recent instance of the repeated character 
            let repeated_character_index = string_copy.lastIndexOf(s[i])
            console.log(`FOUND A REPEATED CHARACTER ${s[i]} AT Index ${i}`)
            console.log(`THIS WAS PREVIOUSLY AT INDEX ${repeated_character_index}`)
    //Start execution from the index after that
            i = repeated_character_index + 1
            console.log(`Going back to index ${i}`)
            substring = substring.replace(substring, s[i])
    //Edit above here

            if (i == s.length-1) {array_of_substrings.push(s[i])}
            console.log(`Array is currently ${array_of_substrings}`)

        } else { 
            substring = substring + s[i]   
            // console.log(`substring is currently ${substring}`)
            if (i == s.length-1) {array_of_substrings.push(substring)}
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