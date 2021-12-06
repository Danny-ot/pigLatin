function indexOfFirstVowel(word){
    const vowel = ["a" , "e" , "i" , "o" , "u"];
    const wordChar = word.split("");
    let returnIndex = -1;

    wordChar.forEach(function(element , index){  
        if(vowel.includes(element.toLowerCase() && returnIndex === -1)){
            returnIndex = index;
            return returnIndex;
        }
    })
    return returnIndex;
}


