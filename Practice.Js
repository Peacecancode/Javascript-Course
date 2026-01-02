console.log("counter Js is connected")

let textButton = document.getElementById("btn");

textButton.onclick = function () {
    document.getElementById("message").innerText = "You Clicked Using JavaScript🎉";
}


// if/else logic //

let Button = document.getElementById("button");
Button.onclick = function () {
    let Age = document.getElementById("ageInput").value;
    if (Age >= 18) {
        document.getElementById("result").innerText = "Yay, Your'e An Adult😁, WELCOME!!";
    }
    else if (Age ===""){
        document.getElementById("result").innerText = "Please Enter Your Age ☹";
    }
    else {
        document.getElementById("result").innerText = "Sorry Your'e Under-aged And Therefore Can't Use This Application 😞 ";
    }
};

// Simple Button Toggle //

let lightStatus = document.getElementById("status");
let toggleButton = document.getElementById("toggleBtn");

toggleButton.onclick = function () {
    if (lightStatus.innerText === "Light Is Off 💡") {
         lightStatus.innerText = "Light Is On 💡";
    }
    else {
        lightStatus.innerText = "Light Is Off 💡";
    }
};

// If/Else Logic With Numbers //

let numInput = document.getElementById("numInput");
let numButton = document.getElementById("numBtn");
let numChecked = document.getElementById("numChecked");

numButton.onclick = function () {
    let num = document.getElementById("numInput").value;
    if (num > 10) {
        document.getElementById("numChecked").innerText = "Greater Than 10"
    } 
    else {
        document.getElementById("numChecked").innerText = "10 or less"
    }
};

