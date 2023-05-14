// For loop
// for(i = 0 ; i <=10; i++){
//     console.log(i+1,"Shohan Kazi");
// }

//Print Odd numbers

// for(i = 0; i <= 20; i++){
//     if (i % 2 === 1) {
//         console.log(i, "is an odd number!");
//     }
// }

// Print Even numbers

// for(i = 0; i <= 20; i++){
//     if (i === 0) {
//         console.log(i , "is not an Even or odd number!");
//     }
//     else if(i % 2 === 0){
//         console.log(i, "is an even number!");
//     }
// }

// Print the summation from 1 - 10

var sum = 0;
for(i = 0; i <=10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i
}
console.log('result = ' + sum );