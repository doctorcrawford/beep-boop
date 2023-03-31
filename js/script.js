// Utility Logic

function includesNumber(input, number) {
  const output = input.toString().includes(number);
  return output;
}


// Business Logic

function beepBoop(userInput) {
  let output = [];
  for (let i = 0; i <= userInput; i++) {
    if (includesNumber(i, 3)){
      output.push("Won't you be my neighbor?");
    } else if (includesNumber(i, 2)){
      output.push("Boop");
    } else if (includesNumber(i, 1)){
      output.push("Beep");
    } else {
      output.push(i);
    }
  }
  return output
}


// UI Logic

function runNeighborhood(e) {
  e.preventDefault();
  const inputNumber = document.getElementById('inputNumber');

  // console.log(beepBoop(inputNumber));
}

window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', runNeighborhood);
  
});