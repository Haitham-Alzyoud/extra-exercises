//Q1: Evaluate each of the following JavaScript expressions and show the value:

// -9 * 3 //-27
// "value is " + 50  // "value is 50"
// 17 % 5 //2 
// 5 % 17 //5 
// 5 / 10  //0.5
// (4 == 4) //true 
// (4 != 5) //true 
// (7 <= 8) //true 
// Math.ceil(2.5) - Math.floor(2.5)  // 1


//Q2: Read a number (using prompt) and display it using alert:
// const number = prompt("Enter a number:");
// alert(`You entered: ${number}`);

// //Q3: Read in two numbers and display them in ascending order:
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// if (num1 < num2) {
//     alert(`In ascending order: ${num1}, ${num2}`);
// } else {
//     alert(`In ascending order: ${num2}, ${num1}`);
// }

// //Q4: Read in two numbers and display the larger:
// const numb1 = parseFloat(prompt("Enter the first number:"));
// const numb2 = parseFloat(prompt("Enter the second number:"));
// if (numb1 > numb2) {
//     alert(`The larger number is: ${numb1}`);
// } else if (numb2 > numb1) {
//     alert(`The larger number is: ${numb2}`);
// } else {
//     alert("Both numbers are equal.");
// }

// //Q5: Read two numbers and display their sum. What problem did you encounter?
// const numbe1 = parseFloat(prompt("Enter the first number:"));
// const numbe2 = parseFloat(prompt("Enter the second number:"));
// const sum = numbe1 + numbe2;
// alert(`The sum is: ${sum}`);

// //Q6: If you have a “num” variable,  Your task is to print:
// const num = 1; 

// switch (num) {
//     case 1:
//         console.log("ONE");
//         break;
//     case 2:
//         console.log("TWO");
//         break;
//     case 3:
//         console.log("THREE");
//         break;
//     case 4:
//         console.log("FOUR");
//         break;
//     case 5:
//         console.log("FIVE");
//         break;
//     case 6:
//         console.log("SIX");
//         break;
//     case 7:
//         console.log("SEVEN");
//         break;
//     case 8:
//         console.log("EIGHT");
//         break;
//     case 9:
//         console.log("NINE");
//         break;
//     default:
//         console.log("PLEASE TRY AGAIN");
//         break;
// }

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
// for (let i = 0; i <= 5; i++) {
//     alert(i);
//   }

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
// let message = '';
// for (let i = 0; i <= 5; i++) {
//   message += i + ' ';
// }
// alert(message);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
// for (let i = 0; i <= 20; i++) {
//     if (i % 3 == 0) {
//       alert(i);
//     }
//   }

// Q10: Prompt the user for a number in the range 0…100.
//  If the number is out of range, display an error message and prompt again until a valid number is entered. 
//  Assume the user enters a number each time.
// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100");
//   number = parseInt(number); 
// } while (isNaN(number) || number < 0 || number > 100);
// alert("You entered a valid number: " + number);

//Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available
// do {
//     number = prompt("Please enter a number between 0 and 100");
//     // number = parseInt(number); 
//   } while (!isNaN(number) || number < 0 || number > 100);
//   alert("You entered a valid number: " + number);

//Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// let num = prompt("Please enter an integer");
// num = parseInt(num);
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// alert("The sum of integers from 0 to " + num + " is: " + sum);

//Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.
let num = prompt("Please enter an integer");
num = parseInt(num);
let sum = 0;

for (let i = 0; i <= num; i++) {
  sum += i;
}

let average = sum / (num + 1);

alert("The average of integers from 0 to " + num + " is: " + average);