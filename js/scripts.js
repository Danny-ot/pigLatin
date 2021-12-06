function pigLatinVowel(word){
    const vowel = ["a","e","i","o","u"];
    const wordArray = word.split("");
    let char = "";
    wordArray.forEach((element) => {
        if(vowel.includes(element)){
        char = element + "way";
    }
    });
    
    return char;
}