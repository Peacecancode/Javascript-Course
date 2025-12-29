//Variables, console.log(), onclick(events), strings vs numbers//

// let message = document.getElementById("message");
// let button = document.getElementById("btn");

// button.onclick = function () {
//     message.textContent = "I'm now in Deautschland";
// };

// let name = "Peace";
// let age = 18;
// console.log(name);
// console.log(age);

// console.log("Javascript is connected!");

// let a = "10";
// let b = 10;
// console.log(a*5);
// console.log(b*5);

// console.log("My Name is Peace");
// console.log("10"+5);
// console.log("10"*5);
// console.log("hi"*5);

// let input = "20";
// console.log(input + 5);
// console.log(Number(input) + 5);

//Inputs + Events//

let nameInput = document.getElementById("nameInput");
let button = document.getElementById("btnn");
let output = document.getElementById("output");

button.onclick = function () {
    let name = nameInput.value.trim();
    output.textContent = "Hello " + name;
};

button.onclick = function () {
    let name = nameInput.value;
    if (name === "") {
        output.textContent = "Please Kindly Enter Your Name" + " :(";
    } 
    else if (name === "Admin") {
        output.textContent = "Your'e Highly Welcome Admin" + "!";
    }
    else {
        output.textContent = "Hello " + name + "! Have A Lovely Day" + " :)";
    }
};