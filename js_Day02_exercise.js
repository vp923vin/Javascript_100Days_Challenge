/*
*    Exercise 1 : Basics of javascript
*/

// 1 create a string variable and add a number to it ?
let $b = "hello";
let $a = 5;
console.log( $b + $a );

// 2 use type of operator to find out the data type of the variables ?
console.log(typeof ($a + $b) ) 
console.log(typeof ($b + $a) )


// 3 create a const object in js can you change it to hold a number later ?

const Employee = {
  "name": "vipin patel",
  "age": 25,
  "sex": 'Male',
  "phone": 7049284664,
  "country": 'India',
  "email": 'vp923vin@gmail.com',
};
// Employee = 24;
// Employee['email'] = 34;
// console.log(Employee['email']);

// 4 try to add a new key to the const object in problem 3 were you able to do it ?

Employee['alternate_email']= "vipinp923@gmail.com";

console.log(Employee['email']);
console.log(Employee['alternate_email']);
console.log(Employee);

// 5 write a program to create a word meaning dictionary of five words?

const dictionary = {
  'elsewhere': 'in or to another place',
  'Assign': 'to give something to somebody for a particular purpose',
  'nostalgia': 'a feeling of pleasure, mixed with sadness, when you think of happy times in the past',
  'investment': 'the act of putting money in a bank, business, property, etc.',
  'yakka': 'work hard',
};

console.log(dictionary);
console.log(dictionary['yakka']);

// Exercise 1 is ended

/*********************************************************/
/* 
*  Exercise 2 : javaScript Operators 
*/

// 1 use the logical operator to find wheather age of a person lies between 10 and 20 ?

let $age = prompt("Enter Your age: ");
// console.log($age, typeof $age);
$age = Number.parseInt($age);  // in above line typeof $age is printed string thats we need to parse the number into integer.

// console.log($age, typeof $age);
if($age > 10 && $age < 20){
  console.log("you are teenager");
}else{
  console.log("you are not a teenager");
}

// 2 demonstrate the switch case statement in JavaScript.

let RandNum = prompt("Enter a random number between 1 to 5 : ");
RandNum = Number.parseInt(RandNum);
switch(RandNum){
  case 1:
    console.log("you are bad");
    break;
  case 2:
    console.log("you are not bad");
    break;
  case 3:
    console.log("you are very bad");
    break;
  case 4:
    console.log("you are good");
    break;
  case 5:
    console.log("you are Excellent");
    break;
  default: 
    console.log("cases not matched");
}

// 3 & 4 - write a javascript program to find the number is divisible by 2 and 3 or not?

let numb = prompt('Enter the number of your choice: ');
numb = Number.parseInt(numb);
//  check number is divisble by 2 and 3 using modulo operator and logical and operator
if( numb % 2 == 0 && numb % 3 == 0 )
{
  console.log("Number is divisible by 2 and 3 Both");
}
else if(numb % 2 == 0)
{
  console.log("number is divisible by 2 only ");
}
else if(numb % 3 == 0)
{
  console.log("number is divisible by 3 only ");
}
else
{
  console.log("Number is neither divisible by 2 nor 3")
}

// print the based on the age input by user i.e. greater than 18 then he/she is eleigle to get driving licence, in other condition he/she is not eligible.

let user_age = Number.parseInt(prompt("Enter the Age: "));
if(user_age > 18){
  console.log("Your are eligible to get your driving licence and also you can drive.")
}else{
  console.log("You are not eligible for License please wait for few years to get your license and currently you are not allowed to drive.");
}


//  Exercise 2 Ended