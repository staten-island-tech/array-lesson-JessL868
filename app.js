//Part 1: 1. Log each student's name and grade.
const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
];
// students.forEach((student) => console.log(student.name, student.grade));

//Part 2: 1. Filter students with grades above 80
// students.filter((student) => student.grade > 80).forEach((student) => console.log(student));

//Part 2: 2. Filter students who are 21 or younger
students.filter((student) => student.age < 22).forEach((student) => console.log(student));