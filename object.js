// Create an object student with properties name, age, and grade. Assign values to each.

// Sample Input:
// name = "Alice", age = 17, grade = "11th"


const student = {
    name: "Alice",
    age: 17,
    grade: "11th"
}

console.log(student.name)

student.school = "Campion";
console.log(student.school)

student.age = 18;
console.log(student.age)

delete student.grade;
console.log(student)

if ("school" in student) {
    console.log("Yes");
} else {
    console.log("No");
}

let keys = ["name", "age", "school"];

for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "name") {
        console.log("name: " + student.name);
    } else if (keys[i] === "age") {
        console.log("age: " + student.age);
    } else if (keys[i] === "school") {
        console.log("school: " + student.school);
    }
}

let students = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 17 },
    { name: "Cara", age: 16 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].name === "Bob") {
        console.log(students[i]);
    }
}


let count = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 18) {
    count++;
  }
}

console.log(count);

//