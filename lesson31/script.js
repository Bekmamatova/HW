let a = Number(prompt("number 1:"))
let b = Number(prompt("number 2:"))
let c = Number(prompt("number 3:"))
let d = Number(prompt("number 4:"))

if (a > b && a > c && a > d) {
    console.log(a)
} else if (b > a && b > c && b > d){
    console.log(b)
} else if (c > a && c > b && c > d) {
    console.log(c)
} else {
    console.log(d)
}