let first_number = Number(prompt("Введите первое число:"))
let operator = prompt("Действие:")
let second_number = Number(prompt("Второе число:"))


if (operator === "-") {
    let res = (first_number - second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "+") {
    let res = (first_number + second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "*") {
    let res = (first_number * second_number)
    alert(`Ваш ответ ${res}`);
} else if (operator === "/") {
    let res = (first_number / second_number)
    alert(`Ваш ответ ${res}`);
} else if (operator === "%") {
    let res = (first_number % second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "**") {
    let res = (first_number ** second_number);
    alert(`Ваш ответ ${res}`);
} else {
    alert("ERROR!");
}