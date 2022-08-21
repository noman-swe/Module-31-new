//1. const and let er moddhy diference
let name = 'Shibly';
name = 'Noman';
// let permits changing the variable value but const doesn't 

//2. default parameter
function getName(firstName, lastName=' Sheikh'){
    // default parameter seted;
    return firstName + lastName;
}

// 3. templete string
const myPerson = `My name is ${name}, and my another name is ${getName(name)}`;;
console.log(myPerson);

// arrow function
const getName2 = x => x * 10;
const tenTimes = getName2(5);
// console.log(tenTimes); 


const mathsFunction =  (num1, num2) =>{
    const add = num1 + num2;
    const multiply = num1 * num2;
    const division = multiply / add;
    return division;
}

const result = mathsFunction(10, 5);
console.log(result);


// find max or min from the array
const numbers = [1, 5 , 57 , 86, 555, 999, 222];
const maxVlaue = Math.max(...numbers);
const minVlaue = Math.min(...numbers);
console.log(minVlaue);