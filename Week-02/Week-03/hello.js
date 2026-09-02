// ========================================
// 1. ES6 - let and const
// ========================================

let age = 20;
const name = "Kashif";

console.log("Name:", name);
console.log("Age:", age);


// ========================================
// 2. ES6 - Arrow Function
// ========================================

const add = (a, b) => {
    return a + b;
};

console.log("Addition:", add(10, 20));


// ========================================
// 3. ES6 - Template Literal
// ========================================

console.log(`My name is ${name} and my age is ${age}`);


// ========================================
// 4. ES6 - Destructuring
// ========================================

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


// ========================================
// 5. ES6 - Spread Operator
// ========================================

const oldNumbers = [1, 2, 3];

const newNumbers = [...oldNumbers, 4, 5];

console.log(newNumbers);


// ========================================
// 6. Array
// ========================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// ========================================
// 7. push()
// Adds item at the END
// ========================================

fruits.push("Orange");

console.log("After push:", fruits);


// ========================================
// 8. unshift()
// Adds item at the START
// ========================================

fruits.unshift("Grapes");

console.log("After unshift:", fruits);


// ========================================
// 9. forEach()
// Runs for every item
// ========================================

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


// ========================================
// 10. filter()
// Selects items according to condition
// ========================================

const marks = [40, 65, 80, 35, 90, 55];

const passedStudents = marks.filter(mark => mark >= 50);

console.log("Passed marks:", passedStudents);


// ========================================
// 11. DOM - Selecting Element
// ========================================

const title = document.querySelector("#title");

console.log(title);


// ========================================
// 12. textContent
// ========================================

const message = document.querySelector("#message");

console.log(message.textContent);


// ========================================
// 13. Event - addEventListener()
// ========================================

const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", () => {

    message.textContent = "Hello JavaScript!";

});


// ========================================
// 14. style
// ========================================

changeBtn.addEventListener("click", () => {

    message.style.color = "blue";
    message.style.fontSize = "30px";

});


// ========================================
// 15. classList
// ========================================

message.classList.add("active");

console.log("Class added");


// ========================================
// 16. innerHTML
// ========================================

const box = document.querySelector("#box");

box.innerHTML = `
    <h2>Student Information</h2>
    <p>Name: Kashif</p>
    <p>Course: JavaScript</p>
`;


// ========================================
// 17. Create Element
// ========================================

const student = document.createElement("p");

student.textContent = "New student added.";

box.appendChild(student);


// ========================================
// 18. Remove Element
// ========================================

const removeBtn = document.querySelector("#removeBtn");

removeBtn.addEventListener("click", () => {

    student.remove();

});


// ========================================
// 19. Add Student Button
// ========================================

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {

    const newStudent = document.createElement("p");

    newStudent.textContent = "Another student added!";

    box.appendChild(newStudent);

});


// ========================================
// 20. Synchronous JavaScript
// ========================================

console.log("Start");

console.log("Middle");

console.log("End");


// ========================================
// 21. Asynchronous JavaScript
// setTimeout()
// ========================================

console.log("Async Start");

setTimeout(() => {

    console.log("This message appears after 2 seconds");

}, 2000);

console.log("Async End");


// ========================================
// 22. Callback Function
// ========================================

function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

function finish() {

    console.log("Task completed");

}

greet("Kashif", finish);


// ========================================
// 23. Promise
// ========================================

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("Task successful");

    } else {

        reject("Task failed");

    }

});

myPromise
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.log(error);

    });


// ========================================
// 24. async / await
// ========================================

async function getResult() {

    try {

        const result = await myPromise;

        console.log("Async result:", result);

    } catch (error) {

        console.log("Error:", error);

    }

}

getResult();


// ========================================
// 25. fetch()
// API example
// ========================================

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log("Users:", data);

    } catch (error) {

        console.log("API Error:", error);

    }

}

getUsers();