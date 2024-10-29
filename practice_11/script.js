// Task 1: 
const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
let grade;

if (averageMarks < 60) grade = "F";
else if (averageMarks < 70) grade = "D";
else if (averageMarks < 80) grade = "C";
else if (averageMarks < 90) grade = "B";
else grade = "A";

console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);

// Task 2:
const input = document.getElementById("textInput"); 
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed");
    }
});

// Task 3: 
const element = document.getElementById("doubleClickElement"); 
element.addEventListener("dblclick", function() {
    console.log("Element was double-clicked");
});

// Task 4:
let progress = 0;
function updateProgress() {
    if (progress < 100) {
        progress += 20; 
        document.getElementById("progress").style.width = progress + "%";
    }
}

// Task 5:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
