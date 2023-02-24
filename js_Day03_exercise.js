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

// convert celcius to fahrenheit


// genrate random number 

// any number can be generated 
console.log("Random Number is: " + Math.random())

// range numbers can be generated 

let l_limit = Number.parseInt(prompt("Enter the lower Limit of the range: "));
let u_limit = Number.parseInt(prompt("Enter the upper Limit of the range: "));

console.log("Random number is " + (Math.random()* (u_limit - l_limit) + l_limit ));


// cheack if a number is odd or even 

let numA = Number.parseInt(prompt("Enter the number: "));
if( num % 2 == 0)
{
  console.log("Even Number");
}else{
  console.log("Odd Number");
}
