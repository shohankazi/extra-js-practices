// Calculate GPA

/*

var result = 70;
if (result >= 80) {
    console.log("You have passed! You got A+");
}
else if(result >=70){
    console.log("You have passed! You got A");
}
else if(result >= 60){
    console.log("You have passed! You got A-");
}
else if(result >= 50){
    console.log("You have passed! You got B");
}
else if(result >= 40){
    console.log("You have passed! You got C");
}
else if(result>= 33){
    console.log("You have passed! You got D");
}
else {
    console.log("Sorry! You are failed. Go and study well");
}

*/

// Get the large number between two numbers

/*

var a = 10;
var b = 20;
if (a > b) {
    console.log(a, "is greater than",b);
} else {
    console.log(b,"is greater than",a);
} 

*/

// Check a number whether it is positive or negative
/*
var a = 0;
if (a === 0 ) {
    console.log(a, "is not a positive or negative number!");
} else if (a > 0){
    console.log(a, "is a positive number!");
}
else{
    console.log(a, "is a negative number!");
} 

*/

// Give statements according to age

/*
var age = 41;
if (age < 19 || age <=40) {
    console.log("You are young!");
} else {
    console.log("wish you a long life!");
}
*/

// small letter or capital letter
/*
var letter = '1';
if (letter >= 'A' && letter <= 'Z') {
    console.log("You entered a capital letter = ", letter);
} else if(letter >= 'a' && letter <= 'z'){
    console.log("You entered a small letter = ", letter);
}
else{
    console.log("the letter you entered is not a character");
}
*/
// check whether it is vowel or consonant

var letter = 'b';
if (letter =='a' || letter == 'A' || letter == 'e' || letter == 'E'|| letter == 'i' || letter == 'i'|| letter == 'I'|| letter == 'o'|| letter == 'O'|| letter == 'u'|| letter == 'U') {
    console.log(letter, "= is a vowel.");
} else {
    console.log(letter, "= is a consonant.");
}