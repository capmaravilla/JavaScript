//? primera opcion
let arr = [1, 2, 3, 4, 5, 6];
arr = [];
console.log(arr);
//esta forma no vale si ya se la hemos asignado a otra variable.
let arr1 = [1, 2];
let arr2 = arr1;
arr1 = [];
console.log(arr1, arr2); //mantiene en memoria

//? segunda opcion

let arr3 = [1, 2];
arr3.length = 0;
console.log(arr3);

//? tercera opcion
let arr4 = [1, 2];
arr4.splice(0, arr4.length);
console.log(arr4);

//? cuarta opcion
// más lenta y que más recursos va a utilizar
let arr5 = [1, 2];
while (arr5.length > 0) {
  arr.pop();
}
console.log(arr5);
