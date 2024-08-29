/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */


console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 12;
console.log("There are " + availableFlightSeats + " seats available on this plane.")

console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 30.00;
console.log("The total grocery cost is " + costOfGroceries);

console.log("Step 3:  Middle Initial");
var middleInitial = "P";
console.log("My middle initial is " + middleInitial);

console.log("Step 4:  Is it Hot Outside?");
var isHotOutside = true;
console.log("Is it hot outside? " + isHotOutside);

console.log("Step 5:  First Name");
var firstName = "Sally";
console.log("The first name is " + firstName);

console.log("Step 6:  Street Address");
var streetAddress = "3560 Zoo Drive"
console.log("The street address is " + streetAddress);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log("A customer booked two seats. There are only " + (availableFlightSeats - 2) + " seats left");

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log("The candy bar brings the total cost to " + (costOfGroceries + 2.15));

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "Q"
console.log("Birth certificate update. Middle initial is now " + middleInitial)

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isHotOutside = !isHotOutside
    console.log(isHotOutside)

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
console.log("The customer's full name is " + firstName + " " + middleInitial + " Gomez");

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓

console.log("The customer " + firstName + " " + middleInitial + " Gomez" + " lives at " + streetAddress);

    console.log('-----------Finished------------')