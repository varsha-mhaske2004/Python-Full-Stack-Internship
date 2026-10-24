// Task 1 — Write programs using conditions and loops
//  Even or Odd Number

let number=10;
if(number%2===0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}


// Positive, Negative or Zero
let num=-5;
if (num>0){
    console.log("positive number");
}
else if (num<0) {
    console.log("negative number");
}
else{
    console.log("zero");
}

//for Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//While Loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



 // Task 2: Functions for Basic Calculations

// Function for Addition
function addition(a, b) {
    return a + b;
}

// Function for Subtraction
function subtraction(a, b) {
    return a - b;
}

// Function for Multiplication
function multiplication(a, b) {
    return a * b;
}

// Function for Division
function division(a, b) {
    return a / b;
}

// Function Calls
console.log("Addition =", addition(20, 10));
console.log("Subtraction =", subtraction(20, 10));
console.log("Multiplication =", multiplication(20, 10));
console.log("Division =", division(20, 10));



 // Task 3: Array Operations

// Create an Array
let students = ["Varsha", "Adi", "Priya", "Riya"];

console.log("Original Array:", students);

// Access an Element
console.log("First Student:", students[0]);

// Add an Element
students.push("Amit");
console.log("After Adding:", students);

// Remove the Last Element
students.pop();
console.log("After Removing:", students);

// Find Array Length
console.log("Total Students:", students.length);


 // Task 4: Create and Access Object Properties

// Create an Object
let student = {
    name: "Varsha",
    age: 22,
    marks: 85,
    city: "Buldana"
};

// Display the Object
console.log("Student Details:", student);

// Access Object Properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Marks:", student.marks);
console.log("City:", student.city);

// Update a Property
student.marks = 90;
console.log("Updated Marks:", student.marks);

// Add a New Property
student.course = "JavaScript";
console.log("Course:", student.course);



 // Task 5: Basic Problem-Solving Programs

// Program 1: Even or Odd
let Number = 7;

if (Number % 2 === 0) {
    console.log(Number + " is Even");
} else {
    console.log(Number + " is Odd");
}

// Program 2: Factorial
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial of " + n + " =", factorial);

// Program 3: Sum of Numbers from 1 to N
let limit = 5;
let sum = 0;

for (let i = 1; i <= limit; i++) {
    sum = sum + i;
}

console.log("Sum from 1 to " + limit + " =", sum);
