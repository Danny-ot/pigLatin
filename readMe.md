Describe : indexOfFirstVowel();

Test : "It should return 1 for a vowel character"
code:
pigLatinVowel("a");
Expected Output : 1;

Test : "It should return 0 for a consonant character"
code:
pigLatinVowel("p");
Expected Output : 0;

Test : "It should return the index of the first vowel in the word"
code:
pigLatinVowel("spray");
Expected Output : 3;

Test : "It should return the index of the first vowel in the word irrespective of the punctuation"
code:
pigLatinVowel("a,rray");
Expected Output : 0;

Test : "It should return the index of the first vowel in the word irrespective of the case"
code:
pigLatinVowel("pEt");
Expected Output : 1;


