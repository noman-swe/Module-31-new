/* const numbers = [34, 43, 53, 24, 63, 24];
numbers = [5, 4, 6, 2, 8];
console.log(numbers); 
// shows error - const doesn't give the permission to change the value
 */

let numbers = [23, 42, 51, 55, 21, 44];
numbers = [5, 4, 6, 2, 8];
//  console.log(numbers);

 const newNumbers = [3, 2, 2, 1, 9];
 newNumbers.push(32);
 newNumbers.push(44);
 newNumbers[0] = 99;
 newNumbers.pop();
//  newNumbers[1].pop(); --iit dosen't work;
console.log(newNumbers);

// ============================
const student = {
    roll: 101, name: 'Sakib', job: 'intern'
};
student.name = 'Shibly';
console.log(student);
// student = {} //===this creates new student variable that's why it shows error
