// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function checkNum(a){
  if (a<0){
    console.log('Number is Negative');
  }
  else if (a>0){
    console.log('Number is Positive');
  }
  else{
    console.log('Number is Zero');
  }
}

checkNum(4); //positive
checkNum(-34); //negative
checkNum(0); //zero





// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function calculateFactorial(n){
  let fact = 1
  if (n==0){
    console.log(1); // 0 factorial 1
  }
  else if (n>0){
    for(let i= 1; i<=n; i++){
      fact = fact * i;
    }
    console.log(fact);
  }
  
  else{
    console.log('Number is negative, enter number greater than 0');
  }
}

calculateFactorial(5); //120
calculateFactorial(0); //1
calculateFactorial(-3); //Number is negative, enter number greater than 0






// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function checkGreater(x, y){
  if (x>y){
    return x; // x greater function returns x
  }
  return y; //if x is not greater than y function will return y as greater 
}

console.log(checkGreater(2,6)); //6
console.log(checkGreater(2000,-188)); //2000
console.log(checkGreater(-2,-6)); //-2






// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function checkPalindrome(text){
  text.toLowerCase();
  let l = text.length;
  let revText = '';
  for (let i = l-1; i>=0; i--){
    revText += text[i];
  }
  if (text === revText){
    console.log('Palindrome');
  }
  else{
    console.log('Not a Palindrome');
  }
}

checkPalindrome('abccba'); //Palindrome
checkPalindrome('wasim'); //Not a Palindrome






// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function prime(a){
  for (let i=2; i<=a; i++){
    let count=0;
    for (let j=2; j<i; j++){
      if (i%j == 0){
        break;
      }
    }
    if (count == 0){
      console.log(i);
    }
  }
}

prime(20);   // 2 3 5 7 11 13 17 19









// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function performCalculation(a, b, oper){
  if (oper == '+'){
    console.log(a+b);
    return;
  }
  else if (oper == '-'){
    console.log(a-b);
    return;
  }
  else if (oper == '*'){
    console.log(a*b);
    return;
  }
  else if (oper == '/'){
    console.log(a/b);
    return;
  }
  else{
    console.log("a and b should be numbers and operator should be one of ['+','-','*','/']");
  }
}


performCalculation(2,3,'+'); // 5
performCalculation(19,3,'-'); // 16
performCalculation(12,6,'*'); // 72
performCalculation(120,4,'/'); // 30
performCalculation('h','d','j'); // a and b should be numbers and operator should be one of ['+','-','*','/']







// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function countVowels(text){
  text.toLowerCase();
  let l = text.length;
  count = 0
  for (let i = 0; i < l; i++){
    if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u'){
      count += 1;
    }
  }
  console.log(count);
}

countVowels('auspicious'); // 6
countVowels('bowler'); // 2
countVowels('feeding'); // 3
countVowels('combination'); // 5







// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function checkPerfect(n){
  perfect = 0
  for(let i = 1; i<n; i++){
    if (n%i == 0){
      perfect += i
    }
  }
  if (perfect == n){
    console.log(n, ' is a Perfect Number');
  }
  else{
    console.log(n, ' is not a Perfect Number');
  }
}

checkPerfect(6); // 6 is a perfect number 1 + 2 + 3 = 6
checkPerfect(28); // 28 is a perfect number 1 + 2 + 4 + 7 + 14 = 28
checkPerfect(33); // 33 is Not a perfect number 1 + 3 + 11 = 15 != 33





// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function printFibonacci(n){
  let a = 0;
  let b = 1;
  let c =a+b;
  while (a <= n){
    console.log(a);
    a = b
    b = c
    c = a+b;
  }  
 
}

printFibonacci(10); // 0 1 1 2 3 5 8
printFibonacci(20); // 0 1 1 2 3 5 8 13






// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.


function printTable(n){
  for (let i=1; i<=10; i++){
    console.log(n, ' * ', i, ' = ', n*i);
  }
}

printTable(7); 

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35
// 7 * 6 = 42
// 7 * 7 = 49
// 7 * 8 = 56
// 7 * 9 = 63
// 7 * 10 = 70