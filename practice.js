//Practice goes here

var lengthOfLongestSubstring = function(s) {
    let array_of_substrings = [];
    let substring = ""

    for (let i=0; i<s.length; i++){
        if (substring.includes(s[i])){
            array_of_substrings.push(substring)
            console.log(`FOUND A REPEATED CHARACTER ${s[i]} AT Index ${i} & Array is currently ${array_of_substrings}`)

            let repeated_character_index = s.slice(0,i).lastIndexOf(s[i])
            console.log(`THIS WAS PREVIOUSLY AT INDEX ${repeated_character_index}`)
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