// let count = 0;
// // let countEl = document.getElementById("count-el");
// console.log(count);

// function increment() {
//     console.log("The button was clicked");
// }

// ------------------------------------

// function countdown (){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown();

// ----------------------------------
// let firstbatch = 5;
// let secondbatch = 10;
// let count = firstbatch + secondbatch;
// console.log(count);


// let myage = 23;
// let humandogratio = 15;
// let mydogage = myage*humandogratio;

// console.log(mydogage);

// -----------------------------------------

// let bonuspoint = 50;
// console.log(bonuspoint);

// bonuspoint = bonuspoint + 50;
// console.log(bonuspoint);

// bonuspoint = bonuspoint - 75;
// console.log(bonuspoint);

// bonuspoint = bonuspoint + 45;
// console.log(bonuspoint);
// ---------------------------------------
// countdown();

// ----------------------------
//  this is how u call or invoke a function.
// function mark(){
//     console.log(42);
// }
// mark();

// ------------------------------

// let lap1 = 56
// let lap2 = 34
// let lap3 = 78
// let lap4 = 90

// function totalLaps(){
// let totalLaps = lap1 + lap2 + lap3 + lap4
// console.log(totalLaps)
// }

// totalLaps();

// function incrementlaps(){
//     lapscompleted = lapscompleted + 1;
// }

// incrementlaps()
// incrementlaps()
// incrementlaps()

// console.log(lapscompleted);
// --------------------------------------

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

console.log(saveEl);

function increment (){
    count += 1;
    // count = count + 1;
    countEl.textContent = count;
}

function save() {
    let save = count;
    console.log(save);
}

function save(){
    let countstr = count + " - ";
    saveEl.textContent  += countstr;
    console.log(count);
}


function reset(){
    count = 0;
    countEl.textContent = count;
}


// ---------------------------------------
// let user = "ali";

// let message = "hi there you r logged inn !"
// console.log(user + "," + message);

// ---------------------------------------

// let name = "ali hassan";

// let greetings = "hi my name is";
// let mygreeting = greetings + " " + name + "!";
// console.log(mygreeting);

// -----------------------------------------
// NOT RELEATED TO THIS
// let welcomeEl = document.getElementById("welcome-el");
// console.log(welcomeEl);

// let name = "ali hassan"
// let greetings ="hi there my name is"
// let mygreeting = greetings + " " + name + "!";


// function myWelcome(){   
// welcomeEl.innerText = greetings + " " + name + "!";
//     console.log(welcomeEl);
// }
