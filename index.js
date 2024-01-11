console.log("I don't like pizza!");

let number = 5;
console.log(number);


let username;
let button1 = document.getElementById("submitButton");
let input1 = document.getElementById("nameInput");

button1.onclick = () => {
    username = input1.value;
    console.log(username);
};
