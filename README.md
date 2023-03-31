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