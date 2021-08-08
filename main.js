// Create two variables called five assigned 5 and eight assigned 8. Next create an
//  if statement comparing five is less than eight.
// If it's true, , print “5 is less than 8”. Else, print ERROR in the console or browser.
// let five_assigned = 5
// let eight_assigned = 8
// if (five_assigned < eight_assigned) {
//  alert("5 is less than 8")

// }
// else{
//     alert("error")
// }

// Review number 2
// Print all even numbers from a user's given start and stop number in the console or browser.

// is all me even number that I a
// let whatEvenStart1 = prompt("What even number should I start with");
// let whatEvenStop2 = prompt("What is a even number to stop with");

//  for (let j = whatEvenStart1; j <= whatEvenStop2; j++) {

//     if(j % 2 === 0){

//         //  the reason that I have  % there is so that it can Divided by any number the number that it going to print.
//         console.log(j);
//     }
//  }

// Review number 3

//  Ask the user to create two variables. Create a function that takes two variables and returns the largest of the two numbers in the console or browser.

// function largestN (){
// //  I want the ues to give me a number
// let bigN = prompt("Give me a number");
// let smallN = prompt("Give me a number");

//  bigN = parseInt(bigN)
//  smallN = parseInt(smallN)

// you put parseInt in when you want number other than string.

// if (bigN > smallN){
//     alert( "You put " + bigN + " and " + smallN + " the biggest number is " + bigN);
//     console.log(bigN);
// }
// // if the (if) don't work than yan unsure that is will go to the else.

// else{
//     alert( "You put " + bigN + " and " + smallN + " the biggest number is " + smallN);
// console.log(smallN);
//   }
// }

// largestN();

// Review 4
// Create a program that takes user input. If they enter 1, call a function that prints 1.
// If they press 2, call a function that prints 2. If they press 3, call a function that prints 3.
// If they enter q, quit. Else, print ERROR in the console or browser.

// function headFunction() {
//   input1();
// }

// //  I want user to put a input and print the input in the console
// function input1() {
//   let number1 = prompt("What you want to say 1,2,3,q");

//   if (number1 == 1) {
//     console.log(1);
//   }
//   else if (number1 == 2) {
//     console.log(2);
//   }

//   else if (number1 == 3) {
//     console.log(3);
//   }
//   if (number1 === "q") {
//     alert("ERROR");
//     console.log("error");
//   }
// }
// headFunction();

// Review 5

// Ask the user to enter a starting balance for their bank account.
// Ask the user if they want to make a withdraw or deposit.
// Ask them for the amount to withdraw or deposit, then show the the new balance in the console or browser.
// // Let the user quit when they enter q.
// function bankB() {
//   let startingB = prompt("What is your starting balance in your bank account");

//   startingB = parseFloat(startingB);

//   let doneQ = true;
//   while (doneQ === true) {
//     let question = prompt(
//       "What would you like to make a withdraw or a deposit put q for quit"
//     ).toUpperCase();
//     if (question === "Q") {
//       doneQ = false;
//     } else {
//       let question1 = prompt("What is the amount");

//       question1 = parseFloat(question1);

//       if (question === "WITHDRAW") {
//         startingB -= question1;

//         console.log(startingB);
//       } else if (question === "DEPOSIT") {
//         startingB += question1;

//         console.log(startingB);

//       }
//     }
//   }
// }

// bankB();
