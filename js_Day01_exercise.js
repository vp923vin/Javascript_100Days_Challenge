// play with variables in javaScript

// 4 methods of declaring js variables 

//   1 - use var keyword to declare.
//   2 - use let keyword to declare.
//   3 - use const keyword to declare.
//   4 - use nothing to declare i.e. you can directly declare variable.

// let and const were add in Ecmascript 6 after 2015.
// before that var is only used to declare the variable.

// constant values cannot change.
// variable names called identifiers and these are case-sensitive.
// if you declare a variable and didnt assign the value so that variable has no value and technically it is undefined.

// same var redeclare variable with var keyword didnt lose it value.
// eg.
//   var myNameIs = "vipin patel";
//   var myNameIs ;
//   console.log(myNameIs, typeof myNameIs) // output vipin patel  string

// variable name can start only with letter or $ or _  and can contain only letter, digits, dollar and underscore.


/** **** let *** */
// The let keyword was introduced in ES6 (2015).
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.

// redeclare not allowed for let vaiable
// eg. 
// let x = 'vip';
// let x = 'name'; // identifier redeclare not allowed using let keyword.

// but with var keyword you can do that.
// js have global scope and function scope/block scope.
// var keyword has global scope.
// let and const keyword has block scope.

// let scope
// eg.1

// {
//   let nne = 'value' ; 
  
// }
// console.log(nne); // not defined error get

// eg.2

// let a = 10;
// console.log(a);
// {
//   let a = 5;
//   console.log(a);
// }
// console.log(a);


// var scope

// var z = 10;
// console.log(z);
// {
//   var z = 2; // here of z has been changed
//   console.log(z);
// }

// console.log(z);

//  scope for with let and var keyword 
// var x = 2;   // Allowed
// let x = 3;   // Not allowed
// {
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
// }
// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }

// Hoisting in javascript
// i.e. first use the variable and then declare
// eg. 
  // carName = 'volvo';
  // var carName;  // No error

  // newCarName = 'Kia';
  // let newCarName; // error Cannot access 'newCarName' before initialization

 
/** **** const **** */

// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

  // eg. 1
  // const car = 'TATA';
  // car = 'MARUTI'; // This will give an error "Assignment to constant variable."

  // eg. 2
  // const PI = 3.141592653589793;
  // PI = 3.14;      // This will give an error
  // PI = PI + 10;   // This will also give an error

  // eg. 3
  // cont PI;
  // PI = 3.14; // incorrect,  JavaScript const variables must be assigned a value when they are declared

//  const keyword can be used for an array declration, for object, for function, for regular expression.

// with const keyword cannot do 

// Reassign a constant value.
// Reassign a constant array.
// Reassign a constant object.

// and with const keyword can do

// Change the elements of constant array.
// Change the properties of constant object.

  // eg. 1
  // const cars = ["Saab", "Volvo", "BMW"];
  // cars[0] = 'kia';
  // console.log(cars); // value and properties can be change but reassign cannot
  
  // cars = ["Toyota", "Volvo", "Audi"]; // throw an error
  
  // eg. 2 
  
  // const car = {
  //   type:"Fiat", 
  //   model:"500", 
  //   color:"white"
  // };
  // car['type'] = "Hyundai";  // No error 
  
  // car = 45;  // Assignment Error

// block scope and comparisons of const with let and var
  // eg. 1
  // var x = 2;     // Allowed
  // const x = 2;   // Not allowed
  // {
  // let x = 2;     // Allowed
  // const x = 2;   // Not allowed
  // }
  // {
  // const x = 2;   // Allowed
  // const x = 2;   // Not allowed
  // }
  
  // eg. 2
  // const x = 2;     // Allowed
  // x = 2;           // Not allowed
  // var x = 2;       // Not allowed
  // let x = 2;       // Not allowed
  // const x = 2;     // Not allowed
  
  // {
  //   const x = 2;   // Allowed
  //   x = 2;         // Not allowed
  //   var x = 2;     // Not allowed
  //   let x = 2;     // Not allowed
  //   const x = 2;   // Not allowed
  // }



// end of variables in javascript

/*********** Exercise questions start  *******************/ 
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
// Employee = 24;     // gives error cannot reassign because variable is constant
Employee['email'] = 34;  // NO error
console.log(Employee['email']);

// 4 try to add a new key to the const object in problem 3 were you able to do it ?

Employee['alternate_email']= "vipinp923@gmail.com";  // no error
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