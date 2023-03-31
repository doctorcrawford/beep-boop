// Business Logic

function beepBoop(userInput) {
  let output = [];
  for (let i = 0; i <= userInput; i++) {
    if (i.toString().includes(3)){
      output.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)){
      output.push("Boop");
    } else if (i.toString().includes(1)){
      output.push("Beep");
    } else {
      output.push(i);
    }
  }



  return output
}