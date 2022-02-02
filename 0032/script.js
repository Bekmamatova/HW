
let arr1 = [5,7,[4,6,[9,[12]],8,9],3,[1,2,3,4,5,[2,89,4]]];

function myArray(array) {
  let newArray = [];
  (function myArray(array) {
    array.forEach(function(item) {
      if (Array.isArray(item)) myArray(item);
      else newArray.push(item);
    });
  })(array);
  return newArray;
}

console.log(myArray(arr1));

