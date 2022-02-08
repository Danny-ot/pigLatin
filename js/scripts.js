// Utility Logic
function indexOfFirstVowel(word){
    const vowel = ["a" , "e" , "i" , "o" , "u"];
    const wordChar = word.split("");
    let returnIndex = -1;

    wordChar.forEach(function(element , index){  
        if(vowel.includes(element.toLowerCase()) && returnIndex === -1){
            returnIndex = index;
            return returnIndex;
        }
    })
    return returnIndex;
}

// Business Logic
function pigLatinVowel(word){
    let returnValue = "";
    if(indexOfFirstVowel(word) === 0 ){
        returnValue = word + "way";
        return returnValue;
    }
    return returnValue;
}
function pigLatinConsonant(word){
    let returnValue = "";
    if(word.trim().length === 0 && word === ""){
        return returnValue
    }
    let indexOf1stVowel = indexOfFirstVowel(word);
    if(indexOf1stVowel !== 0 ){
        if(indexOf1stVowel === -1){
            indexOf1stVowel = 0;
        }
            
            let firstSlice = word.slice(0,indexOf1stVowel)
            let secondSlice = word.slice(indexOf1stVowel, word.length)
            returnValue =  secondSlice + firstSlice + "ay";
            return returnValue;
        
    }
    return returnValue;
}
function treatQu(word){
    let returnValue = "";
    if(word.toLowerCase().indexOf("qu") === 0){
        let wordSlice = word.slice(2 , word.length);
        returnValue = wordSlice + "quay";
        return returnValue;
    }
    return returnValue;
}
function pigLatinWord(word){
    let returnValue = "";
    if(treatQu(word)){
        returnValue = treatQu(word);
    }
    else if(pigLatinVowel(word)){
        returnValue = pigLatinVowel(word);
    }
    else if (pigLatinConsonant(word)){
        returnValue = pigLatinConsonant(word);
    }
    return returnValue;
}

function pigLLatin(sentence){
    let returnValue = "";
    let sentenceArray = sentence.split(" ")
    sentenceArray.forEach(function(element){
        returnValue += pigLatinWord(element) + " ";
        return returnValue
    })
    return returnValue;
}

