const numbersArray = [12, 44, 35, 27, 65];
// console.log(numbersArray);

//get only the array values not the array
// console.log(...numbersArray);


// 
const max = Math.max(51, 86, 40);
// console.log(max);

// Math.max doesn't work in array variable directly but we can use--
const maxInArray = Math.max(...numbersArray);
// console.log(maxInArray);


const numbers2 = numbersArray;
// numbers2.push(100);
// console.log(numbers2); 
// where number2 is showing the newly added 100 value but i have set the value after adding first array is equal to second array. but if i want to have the non added value then:::
const number3 = [ ...numbersArray ]; // to remove 2-dimentional array
// const number4 = [ ...numbersArray, 552, 888 ]; //to add more value in array

numbers2.push(100);
console.log(number3);