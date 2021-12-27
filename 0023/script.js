let myArray= [23, 72, 35, 62, 75, 25];
let num = Number(prompt("Enter a number"));

while (num != 0) {
    if (myArray.includes(num)) {
        console.log("Have");
    } else {
        console.log("Haven't");
    }
    num = Number(prompt("Enter a number"));
}
