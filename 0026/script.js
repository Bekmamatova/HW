function myMax(myArr) {
    return Math.max.apply(null, myArr);
}

let result = myMax([1, 2 , 6, 12, 45, 78]);
console.log(result);