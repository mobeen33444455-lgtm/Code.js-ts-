
let studentName = "Ali";

let english = 75;
let maths = 80;
let computer = 90;

let total = english + maths + computer;
let average = total / 3;

console.log("Student Name: " + studentName);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average);

if (average >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}