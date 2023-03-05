// operators and expressios in javascript

// There are different types of JavaScript operators:

  // 1 Arithmetic Operators
  // 2 Assignment Operators
  // 3 Comparison Operators
  // 4 Logical Operators
  // 5 Type Operators

  // 1 Arithmetic Operators Examples
  // eg. 
  // console.log(10 + 20 ); // addition
  // console.log(30 - 20 ); // subtraction
  // console.log(10 * 20 ); // multiplication 
  // console.log(20 / 10 ); // division
  // console.log(10 ** 2 ); // exponetiation (ES6 2015)
  // console.log(22 % 10 ); // modulus
  // let x=10;
  // console.log(x++ ); // post-increment
  // console.log(x-- ); // post-decrement
  // console.log(++x ); // pre-increment
  // console.log(--x ); // pre-decrement

  // 2 Assignment Operators Examples
  // eg.
  // let x = 10; // simple assignment operator
  // let x = x + 10; // or // let x += 10; // Addition Assignment Operator
  // let x -= 10; // Subtraction Assignment Operator
  // let x *= 10; // Multiplication Assignment Operator
  // let x /= 2; // Division Assignment Operator
  // let x **= 2 // Exponentiation Assignment Operator
  // let x %= 10; // Remainder/Modulus Assignment Operator

  // When used on strings, the + operator is called the concatenation operator.
  // eg.
  // let x = 5 + 5;
  // let y = "5" + 5;
  // let z = "Hello" + 5;


  // 3 Comparison Operators Examples
  // eg.
  // let x = 5;  console.log(x == 5); console.log(x == 6); // equal to Operators
  // let x = 5; let y = "hello"; let z = '5'; console.log(x === y); console.log(x === z);// equal value and equal type Operators
  // let x = 5; let y = "hello"; let z = '5'; console.log(x !== y); console.log(x !== z); // not equal value or not equal type Operators
   // let x = 5;  console.log(x != 5); console.log(x != 6); // not equal Operators
  // let x = 5;  console.log(x > 3); // greater than Operators
  // let x = 5;  console.log(x < 3); // less than Operators
  // let x = 5;  console.log(x >= 5); console.log(x >= 3); // greater than or equal to Operators
  // let x = 5;  console.log(x <= 5); console.log(x <= 3); // less than or equal to Operators
  // let x = 5; let variable = (x == 5) ? console.log(true) : console.log(false); // ternary operator

  // 4 Logical Operators Examples
  // eg.
  // let x = 5; (x > 3 && x < 6 ) ? console.log(true) : console.log(false); // logical and operator
  // let x = 5; (x > 3 || x < 6 ) ? console.log(true) : console.log(false); // logical or operator
  // let x = 5; !(x == 5) ? console.log(true) : console.log(false); // logical not operator

  // 5 Type Operators Examples
  // eg.
  // let x = 5;
  // console.log(typeof x); // type of vaiable
  // console.log(instanceof x['date']);

  // logical bitwise operator
  // console.log(-5<<2) // left shift operator
  // console.log(-5>>2) // right shift operator
  // console.log(5&1) // AND operator
  // console.log(5|1) // OR  operator
  // console.log(~ 5) // NOT operator // something wrong
  // console.log(5 ^ 1) // XOR  operator


// ends operators and expressios in javascript

// if-else, switch-case

// if statement
// if(true){
// // condition true
// }
  
// if-else statement
// a = false;
// if(a == true){
//   // condition true
// } 
// else
// {
//   // condition false 
// }

// else if statement
// let a = 18;
// if(a > 18){
//   // condition true
// }
// else if(a < 18)
// {
//   // if statement false 
// }

// switch case
// switch(expression){
//   // different cases
//   case x:
//     // statements;
//     break;
//   case y:
//     // statements;
//     break;
//   case z:
//     // statements;
//     break;
//   default:
//     // break is not required in default statment 
//     // it will be executed when no case matches
// }


// end of if-else and switch case

/*********** Exercise Starts **********************/

/*
*  practice question on operators and expression
*/

// 1 Convert the following if-else-if construct into switch case:
// if(var == 1)
// System.out.println("good");
// else if(var == 2)
// System.out.println("better");
// else if(var == 3)
// System.out.println("best");
// else
// System.out.println("invalid");

//  Answer: 

let val = Number.parseInt(prompt("Enter the value:  "));
switch(val){
  case 3:
    console.log('best');
    break;
  case 2:
    console.log('better');
    break;
  case 1:
    console.log('good');
    break;
  default:
    console.log('invalid')
    break;
}

// 2 Rewrite the following program code using suitable ‘if’ command.

// switch(m){
// case 0:
//  x=x+2;
//  System.out.println(“X=” x);
//  break;
// case 1:
//  x=x+4;
//  System.out.println(“X=” x);
//  break;
// case 2:
//  x=x+6;
//  System.out.println(“X=” x);
//  break; }

// Answer: 

let x = Number.parseInt(prompt('Enter the value: '));
if(x == 0){
  x = x + 2;
  console.log('x = ' + x);
}else if(x == 1){
  x = x + 4;
  console.log('x = ' + x);
}else if(x == 2){
  x = x + 6;
  console.log('x = ' + x);
}

//  if else

// 3 If a customer's order exceeds a certain amount, how would you provide them with a discount using an if/else statement?

console.log("Our offers in payment: above 5000  20% discount, between 5000 and 2000 10% discount, below 2000  no discount \n");
let amount = Number.parseInt(prompt("Enter the amount to pay your Bill: "));
if(amount >= 5000)
{
  let discount = 20;
  amount = (amount - ((amount * discount)/100));
  console.log("you got " + discount + "% discount." );
  console.log("amount to pay = " + amount );
}
else if(amount >= 2000 && amount < 5000)
{
  let discount = 10; 
  amount = (amount - ((amount * discount)/100));
  console.log("you got " + discount + "% discount." );
  console.log("amount to pay = " + amount );
}
else
{
  let discount = 0;
  amount = (amount - ((amount * discount)/100));
  console.log("currently there is no discount less than amount 2000" );
  console.log("amount to pay = " + amount );
}


// 4 If a user enters an incorrect password, how would you display a message asking them to try again using an if/else statement?

let dbpass = 'vipin@123'
let pass = prompt("Enter the password: ");
if(dbpass == pass){
  // entry to dashboard
  console.log('welcome to dashboard');
}else{
  // incorrect password
  console.log('incorrect password');
}

// 5 If a user selects a specific shipping option, how would you display the expected delivery date using an if/else statement?

let shippingOption = Number.parseInt(prompt("choose your shipping option 1, 2, 3, 4, 5 or 0 "));
if(shippingOption == 1){
  console.log("you will get your order in 2 days");
}else if(shippingOption == 2){
  console.log("you will get your order in 3 days");
}else if(shippingOption == 3){
  console.log("you will get your order in 4 days");
}else if(shippingOption == 4){
  console.log("you will get your order in 5 days");
}else if(shippingOption == 5){
  console.log("you will get your order in 6 days");
}else{
  console.log("you will get your order in 7 days");
}

// 6 If a user enters an invalid email address, how would you display an error message using an if/else statement?

let str = prompt("Enter your Email: ");
let str1 = str.match(/@/);
let str2 = str.match(/.com/);
if(str1 && str2){
  console.log("valid email");
}else{
  console.log("invalid email");
}

// 7 If a customer's order contains an out-of-stock item, how would you display a message informing them of the situation using an if/else statement?

let stock = 0;
if(stock == 0 ){
  console.log("product is out of stock.");
}else{
  console.log("product is available in stock you can purchase item.");
}

// switch case

// 8 If a user selects a specific category from a dropdown menu, how would you display the relevant products using a switch statement?

let opt = Number.parseInt(prompt("choose your categories (toyCar = 1, laptop = 2 , mobile = 3, watch = 4, earphone = 5, bottle = 6 ): "));
switch(opt){
  case 1:
    console.log("BMW, Toyota, Hyndai, Tata, Maruti, Mahindra");
    break;
  case 2:
    console.log("Mackbook, realme, hcl, dell, HP, Redmi");
    break;
  case 3:
    console.log("Iphone, Realme, Asus, Nokia, Samsung, Oppo");
    break;
  case 4:
    console.log("boat, noise, jbl, bose, realme, apple");
    break;
  case 5:
    console.log("boat, hammer, jbl, bose, skullcandy, zebronics");
    break;
  case 6:
    console.log("cello, milton, copper, Aluminum, stainless bottle");
    break;
  default :
    console.log("you didn't choose any category")
}

// 9 If a user selects a specific language on a website, how would you translate the website's content using a switch statement?

let opt = Number.parseInt(prompt("choose language (Hindi = 1, English = 2 , french = 3, irish = 4, spanish = 5, dutch = 6 ): "));
switch(opt){
  case 1:
    console.log("you are in hindi web page");
    break;
  case 2:
    console.log("you are in english web page");
    break;
  case 3:
    console.log("you are in french web page");
    break;
  case 4:
    console.log("you are in irish web page");
    break;
  case 5:
    console.log("you are in spanish web page");
    break;
  case 6:
    console.log("you are in dutch web page");
    break;
}

// 10 If a user selects a specific currency, how would you convert the prices using a switch statement?

console.log("Available currencies: dollar = 1, euro = 2, yuan = 3, yen = 4, pound = 5 , inr = 6 ");
let currentCurrency = Number.parseInt(prompt("Enter your first currency choice: "));
let firstAmount = Number.parseInt(prompt("Enter the amount: "));
let currency = Number.parseInt(prompt("choose another currency to check value : "));

switch(currentCurrency){
  case 1: 
    switch(currency){
    case 1:
      // 1 dollar = 1 dollar 
      var secondAmount = firstAmount;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 dollar = 0.94 euro
      var secondAmount  = firstAmount * 0.94;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 dollar = 6.91 yuan
      var secondAmount  = firstAmount * 6.91;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 dollar = 135.84 yen
      var secondAmount  = firstAmount * 135.84;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 dollar = 0.83 pound
      var secondAmount  = firstAmount * 0.83;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 dollar = 81.71 inr
      var secondAmount  = firstAmount * 81.71;
      console.log(secondAmount + "inr");      
      break;
  }
    break;
  case 2:
    switch(currency){
    case 1:
      // 1 euro = 1.07 dollar 
      var secondAmount = firstAmount * 1.07;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 euro = 1 euro
      var secondAmount  = firstAmount ;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 euro = 7.36 yuan
      var secondAmount  = firstAmount * 7.36;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 euro = 135.84 yen
      var secondAmount  = firstAmount * 144.67;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 euro = 0.88 pound
      var secondAmount  = firstAmount * 0.88;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 euro = 87.03 inr
      var secondAmount  = firstAmount * 87.03;
      console.log(secondAmount + "inr");      
      break;

  }
    break;
  case 3:
    switch(currency){
    case 1:
      // 1 yuan = 0.14 dollar 
      var secondAmount = firstAmount * 0.14;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 yuan = 0.14 euro
      var secondAmount  = firstAmount * 0.14;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 yuan = 1 yuan
      var secondAmount  = firstAmount * 1;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 yuan = 19.67 yen
      var secondAmount  = firstAmount * 19.67;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 yuan = 0.12 pound
      var secondAmount  = firstAmount * 0.12;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 yuan = 11.83 inr
      var secondAmount  = firstAmount * 11.83;
      console.log(secondAmount + "inr");      
      break;

  }
    break;
  case 4:
    switch(currency){
    case 1:
      // 1 yen = 0.0074 dollar 
      var secondAmount = firstAmount * 0.0074;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 yen = 0.051 euro
      var secondAmount  = firstAmount * 0.051;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 yen = 0.051 yuan
      var secondAmount  = firstAmount * 0.051;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 yen = 1 yen
      var secondAmount  = firstAmount * 1;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 yen = 0.0061 pound
      var secondAmount  = firstAmount * 0.0061;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 yen = 0.60 euro
      var secondAmount  = firstAmount * 0.60;
      console.log(secondAmount + "inr");      
      break;

  }
    break;
  case 5:
    switch(currency){
    case 1:
      // 1 pound = 1.20 dollar 
      var secondAmount = firstAmount * 1.20;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 pound = 1.13 euro
      var secondAmount  = firstAmount * 1.13;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 pound = 8.31 yuan
      var secondAmount  = firstAmount * 8.31;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 pound = 163.29 yen
      var secondAmount  = firstAmount * 163.29;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 pound = 1 pound
      var secondAmount  = firstAmount * 1;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 pound = 98.34 inr
      var secondAmount  = firstAmount * 98.34;
      console.log(secondAmount + "inr");      
      break;

  }
    break;
  case 6: 
    switch(currency){
    case 1:
      // 1 inr = 0.012 dollar 
      var secondAmount = firstAmount * 0.012;
      console.log(secondAmount + "dollar");
      break;
    case 2:
      // 1 inr = 0.011 euro
      var secondAmount  = firstAmount * 0.011;
      console.log(secondAmount + "euro");
      break;
    case 3:
      // 1 inr = 0.085 yuan
      var secondAmount  = firstAmount * 0.085;
      console.log(secondAmount + "Yuan");
      break;
    case 4:
      // 1 inr = 1.66 yen
      var secondAmount  = firstAmount * 1.66;
      console.log(secondAmount + "yen");      
      break;
    case 5:
      // 1 inr = 0.010 pound
      var secondAmount  = firstAmount * 0.010;
      console.log(secondAmount + "pound");      
      break;
    case 6:
      // 1 inr = 1 inr
      var secondAmount  = firstAmount * 1;
      console.log(secondAmount + "inr");      
      break;

  }
    break;
}
    
// 11 If a user selects a specific theme, how would you change the website's colors using a switch statement?

console.log("theme optiond: dental = 1, ecommerce = 2, fitness = 3, news = 4, trading = 5, delivery = 6");
let choo = Number.parseInt(prompt("choose theme: "));
switch(choo){
  case 1:
    console.log("blue");
    break;
  case 3:
    console.log("teal");
    break;
  case 2:
    console.log("dark");
    break;
  case 4:
    console.log("white-red");
    break;
  case 5:
    console.log("green-red");
    break;
  case 6:
    console.log("yellow");
    break;
  default :

}
    
  
// ternary operator 

// 13 If a customer's order exceeds a certain amount, how would you provide them with a discount using a ternary operator?

let amount = Number.parseInt(prompt("Enter the amount: "))
let result = (amount >= 5000) ? 
  console.log((amount - ((amount * 20 ) / 100))) : 
(amount < 500 && amount >= 2000) ? 
  console.log((amount - ((amount * 10 ) / 100))) :
  console.log(amount)


// 14 If a user is logged in, how would you display a welcome message using a ternary operator?

let isvalid = (true) ? console.log("welcome to dashboard") : console.log("invalid credential")

// 15 If a user has reached the end of a quiz, how would you display their score using a ternary operator?

endQuiz = false;
let isQuizEnd = (endQuiz) ? console.log("marks: dummy") : console.log("")

// 16 If a user selects a specific language, how would you display the correct greeting using a ternary operator?

let lang = prompt("Enter the language: ");
let greet = (true) ? console.log("temp greet in " + lang) : console.log("")

// 17 If a user has completed a form, how would you display a confirmation message using a ternary operator?

isAllFilled = true;
let formFilled = (isAllFilled) ? console.log("your form filled success") : console.log("");