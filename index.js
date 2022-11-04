// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;

// console.log(count);

// var myAge = 33;
// var humanDogRatio = 7;
// var myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// //count + 1
// count = count + 1; //5 + 1 = 6

// count = count + 10;

// count = count -

// console.log(count);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

//initalise the count as 0
//list for clicks on the increment button
//increment the count when the button is clicked
//change the count el in the html to feflect the new count

// function increment() {
//   console.log("button was clicked");
// }

// function invoker() {
//   console.log("42");
// }

// invoker();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime() {
//   console.log(lap1 + lap2 + lap3);
// }

// totalLapTime();

// let lapsCompleted = 0;

// function plusOne() {
//   lapsCompleted = lapsCompleted + 1;
// }

// plusOne();
// plusOne();
// plusOne();

// console.log(lapsCompleted);

// document.getElementById("count-el").innerText = 5;
// let countEl = document.getElementById("count-el");

// let count = 0;

// function counter() {
//   // console.log("clicked");
//   count += 1;
//   countEl.innerText = count;
//   console.log(count);
// }

// let countEl = document.getElementById("count-el");

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }

// console.log(message + ", " + userName);

// messageToUser = message + ", " + userName + "!";
// console.log(messageToUser);

// let name = "micheal briggs";
// let greeting = "hi, my name is ";

// let myGreeting = greeting + name;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "micheal";
// let greeting = "Hi, my name is ";
// // let myGreeting = greeting + name;
// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "👋";

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  // console.log("clicked");
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  count = 0;
  countEl.textContent = 0;
  console.log(count);
}

// let userName = "per";
// let message = "You have tree new notifications";
