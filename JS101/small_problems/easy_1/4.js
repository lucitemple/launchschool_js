//4. How Big Is The Room?
/* Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input. */

let area = () => {
    let rlSync = require('readline-sync');
    let length = rlSync.question("Enter the length of the room in meters: ");
    let width = rlSync.question("Enter the width of the room in meters: ");
    let sqm = width * length;
    let sqf = sqm * 10.7639;

    console.log(`The area of the room is ${sqm} square meters (${sqf} square feet).`)
}

area();
