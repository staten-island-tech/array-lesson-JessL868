//Assignment 1
// Part 1: 1. Log each student's name and grade.
// const students = [
//     { name: 'Alice', age: 20, grade: 85 },
//     { name: 'Bob', age: 22, grade: 90 },
//     { name: 'Charlie', age: 21, grade: 78 },
//     { name: 'Diana', age: 23, grade: 95 },
// ];
// students.forEach((student) => console.log(student.name, student.grade));

// Part 2: 1. Filter students with grades above 80
// students.filter((student) => student.grade > 80).forEach((student) => console.log(student));
// orrrrr const topStudents = students.filter((student) => student.grade > 80)
// console.log(topStudents)

// Part 2: 2. Filter students who are 21 or younger
// students.filter((student) => student.age <= 21).forEach((student) => console.log(student));

// Part 3: 1. Log the names of students who scored above 80
// students.filter((student) => student.grade > 80).forEach((student) => console.log(student.name));

// Part 2: 2. Log the names of students 21 or younger
// students.filter((student) => student.age <= 21).forEach((student) => console.log(student.name));

//Assignment 2
//Part 1: 1. Log the name and price for each product
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];
// products.forEach((product) => console.log(product.name, product.price));

//Part 1: 2. Increase the price of each product by 10% and log the updated products
//products.forEach((product) => console.log(product.price * 1.1));

//Part 1: 3. Use forEach to create a list of all unique categories in the products array
// const categories = [];
// products.forEach(product => {
//   if (!categories.includes(product.category)) {
//     categories.push(product.category);
//   }
// });
// Cconsole.log('Unique Categories:', categories);

//Part 2: 1. Create a new array that only includes products from the electronics category
// const electronics = products.filter(product => product.category === 'Electronics');
// console.log('Electronics:', electronics);

//Part 2: 2. Filter products that cost more than $300 and store them in a new array
// const expensiveProducts = products.filter(product => product.price > 300);
// console.log('Expensive Products:', expensiveProducts);

//Part 2: 3. Filter products with a rating of 4.5 or above
//products.filter((product) => product.rating >= 4.5).forEach((product) => console.log(product));

//Part 3: 1. Use filter to get the highly rated products and then use forEach to log only their names
products.filter((product) => product.rating >= 4.5).forEach((product) => console.log(product.name));