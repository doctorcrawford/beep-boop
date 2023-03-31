// Utility Logic

function includesNumber(input, number) {
  const output = input.toString().includes(number);
  return output;
}


// Business Logic

function beepBoop(userInputNumber, userInputName) {
  let output = [];
  // if (userInputNumber.trim() == 0) {
  //   window.alert("Please enter a number!");
  // } else if (userInputName.trim() == 0) {
  //   window.alert("Please enter a name!");
  // } else {
    for (let i = 0; i <= userInputNumber; i++) {
      if (includesNumber(i, 3)){
        output.push(`Won\'t you be my neighbor, ${userInputName}?`);
      } else if (includesNumber(i, 2)){
        output.push("Boop");
      } else if (includesNumber(i, 1)){
        output.push("Beep");
      } else {
        output.push(i);
      }
      }
    // }
  return output
}


// UI Logic
const form = document.querySelector('form');
let result = document.getElementById("result");

function runNeighborhood(e) {
  e.preventDefault();
  document.getElementById("neighborhood").removeAttribute("class", "hidden");
  const inputNumber = document.getElementById('inputNumber').value;
  const inputName = document.getElementById('inputName').value;

  if (inputNumber == 0) {
    result.innerHTML = "Please enter a number!";
  } else if (inputName.trim() == 0) {
    result.innerHTML = "Please enter a name!";
  } else {
    result.innerHTML = beepBoop(inputNumber, inputName).join(", ");
  }
}
window.addEventListener('load', function() {
  form.addEventListener('submit', runNeighborhood);
});