
let studentName: string = "Ali";

let english: number = 75;
let maths: number = 80;
let computer: number = 90;

let total: number = english + maths + computer;
let average: number = total / 3;

console.log("Student Name: " + studentName);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average);

if (average >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}