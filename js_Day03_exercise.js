// js data types 

  // 1. String
  // 2. Symbol
  // 3. Number
  // 4. Null
  // 5. Bigint
  // 6. Boolean
  // 7. Undefined
  // 8. Object
  
  // The Object Datatype
  // 1. An object
  // 2. An array
  // 3. A date

  // let ax = "vipin";
  // let bx = Symbol('@');
  // let cx = 1;
  // let dx = null; // typeof (not "null" for legacy reasons)
  // let ex = BigInt(500);
  // let fx = true;
  // let gx ;
  // let hx = { };
  // console.log(ax, bx, cx, dx, ex, fx, gx, hx);
  //   console.log(typeof ax,typeof bx,typeof cx,typeof dx,typeof ex,typeof fx,typeof gx,typeof hx);


// end of js data types

// Loops 

// execute a block of code a number of times.

//  for loop 
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }
// eg.
// let cars = ['BMW', 'Toyota', 'Hyundai', 'Mahindra', 'Maruti', 'Jaguar', 'Audi', 'Mercedes'];
// for (let ci = 0 ; ci < cars.length ; ci++ ){
//   console.log("car no. " + (ci + 1) + " is " + cars[ci]);
// }

// for in loop

// for (key in objects) {
//   // code block to be executed
// }

//  used object to loop
// Do not use for in over an Array if the index order is important.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// eg.
// let cars = {
//   'BMW' : 'BMW XI',
//   'Toyota': 'Toyota Fortuner',
//   'Hyundai': 'i10',
//   'Mahindra': 'Thar',
//   'Maruti': 'Maruti 800',
//   'Jaguar': 'Jaguar XF',
//   'Audi': 'Audi A6',
//   'Mercedes': 'Mercedes Benz A-class'
// };
// for (key in cars){
//   console.log(cars[key]);
// }

// for of loop

// for (variable of iterable) {
//   // code block to be executed
// }

// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.
//  strings can also iterate

// eg.
// let cars = ['BMW', 'Toyota', 'Hyundai', 'Mahindra', 'Maruti', 'Jaguar', 'Audi', 'Mercedes'];

// for (ai of cars) {
//   console.log(ai);
// }

// do - while loop

// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// do {
//   // code block to be executed
// }
// while (condition);

// eg.
// let i = 0;
// do {
//   text = "The number is " + i;
//   console.log(text);
//   i++;
// }
// while (i < 10);

//  while loop
// The while loop loops through a block of code as long as a specified condition is true.

// while (condition) {
//   // code block to be executed
// }

// eg.
// let i = 0;
// while(i < 10){
//   text = "The number is " + i;
//   console.log(text);
//   i++;
// }


//  ends Loops

// Day 03 : javascript basic programs  date: 24-feb-2023

// add two  numbers using js

let a = Number.parseInt(prompt("Enter the first Number: "));
let b = Number.parseInt(prompt("Enter the second Number: "));
let c = a + b;
console.log("the sum of the two numbers: " + c );


// square root of a number 

 // M1
let num = Number.parseInt(prompt("Enter the Number: "));
console.log("Square Root of the number " + num + " is " + Math.sqrt(num));

// M2
let num2 = Number.parseInt(prompt("Enter the Number: "));
console.log("Square Root of the number " + num2 + " is " + (num2**(1/2)));

// calculate area of trianle 

// if give base and height of trianle 

let base = Number.parseInt(prompt("Enter the base value: "));
let height = Number.parseInt(prompt("Enter the height value: "));

console.log("Area of triangle where base value = " + base + " and height value = " + height + ": " + ((base*height)/2));

//  when given three side of triagle 

alert("Enter the three sides of the triagle");

let side_a = Number.parseInt(prompt("Enter the first side of triagle: "));
let side_b = Number.parseInt(prompt("Enter the second side of triagle: "));
let side_c = Number.parseInt(prompt("Enter the third side of triagle: "));
let s =  (side_a + side_b + side_c )/2;
console.log("the value of s is: " + s);
console.log("Area of triagle is: " + (s * ( s - side_a ) * ( s - side_b ) * (s - side_c) ) ** 0.5 );


//  swapping of numbers 

// use temp variable

let val_a = Number.parseInt(prompt("Enter the first value: "));
let val_b = Number.parseInt(prompt("Enter the second value: "));
console.log("fist value: " + val_a + " and Second value: " + val_b );
let temp;
temp = val_a;
val_a = val_b;
val_b = temp; 
console.log("values after swapping: first value = " + val_a + " and second value = " + val_b );


// without temp variable
let val_c = Number.parseInt(prompt("Enter the first value: "));
let val_d = Number.parseInt(prompt("Enter the second value: "));
console.log("fist value: " + val_c + " and Second value: " + val_d );
val_c = val_c + val_d;
val_d = val_c - val_d;
val_c = val_c - val_d;
console.log("values after swapping: first value = " + val_c + " and second value = " + val_d );

// check number is positive or negative 

let numbe = Number.parseInt(prompt("Enter the accoding to you and here you can add positive negative: "));

if(numbe > 0 ){
  console.log("number is positive.");
}else if( numbe == 0){
  console.log("zero.");
}else{
  console.log("number is negative.");
}

// convert kilometers to miles
let KMtoML = Number.parseInt(prompt("Enter the value: "));
// 1 km = 0.622 nmiles
console.log((KMtoML * 0.622) + "Miles \n");
// convert celcius to fahrenheit
let ctF = Number.parseInt(prompt('Enter the celcius value: '))
console.log("Fahrenheit = " + ((ctF* 9)/5) + 32);


// genrate random number 
// any number can be generated 
console.log("Random Number is: " + Math.random())

// range numbers can be generated 

let l_limit = Number.parseInt(prompt("Enter the lower Limit of the range: "));
let u_limit = Number.parseInt(prompt("Enter the upper Limit of the range: "));

console.log("Random number is " + (Math.random()* (u_limit - l_limit) + l_limit ));


// check if a number is odd or even 

let numA = Number.parseInt(prompt("Enter the number: "));
if( num % 2 == 0)
{
  console.log("Even Number");
}else{
  console.log("Odd Number");
}
