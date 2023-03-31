# Beep Boop

#### By Kyle Crawford

#### A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with various substitutions

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap
* Git

## Description

This website allows users to enter a number as well as their name, and returns to them a list of values from 0 to the user's inputted number with various substitutions made.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* None to my knowledge.

## License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2023 Kyle Crawford




TDD

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return the array but if a number contains a 3, it will be replaced with 'Won't you be my neighbor?'"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 'Won't you be my neighbor?', 4, 5]

Test: "It should return the array but if a number contains a 2, it will be replaced with 'Boop'"
Code: beepBoop(5);
Expected Output: [0, 1, 'Boop', 'Won't you be my neighbor?', 4, 5]

Test: "It should return the array but if a number contains a 1, it will be replaced with 'Beep'"
Code: beepBoop(5);
Expected Output: [0, 'Beep', 'Boop', 'Won't you be my neighbor?', 4, 5]

Test: "It should return the array but with a replacement hierarchy of 3>2>1 "
Code: beepBoop(15);
Expected Output: [0, 'Beep', 'Boop', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop', 'Won't you be my neighbor?', 'Beep', 'Beep']

Test: "It should return the array adding the user's name to the return string"
Code: beepBoop(5, Kyle);
Expected Output: [0, 'Beep', 'Boop', 'Won't you be my neighbor, Kyle?', 4, 5]

Test: "It should prompt the user if no number is entered"
Code: beepBoop(, Kyle);
Expected Output: "Please enter a number!"

Test: "It should prompt the user if no name is entered"
Code: beepBoop(5, );
Expected Output: "Please enter a name!"