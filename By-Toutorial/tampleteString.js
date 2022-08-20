// back-tic or carret features::
/* 
const cow = 'this is cowwwwwwwwwwwwwwww. cow eats grass. cow finds happiness in field 
this is cowwwwwwwwwwwwwwww. cow eats grass. cow finds happiness in field'
; 

prb>2

*/
// const  cows = "this is cowwwwwwwwwwwwwwww. cow eats grass. cow finds happiness in field. from it's pie we get fertilizer.
// this is cowwwwwwwwwwwwwwww. cow eats grass. cow finds happiness in field. from it's pie we get fertilizer.";

// but in caret::
const caretUsages = `the cow is a domestic animal. it has four legs, two eyes, 
one nose and one tail. cow eats grass, 
it gives us milk.Milk is very important in humans food chart.`;


const count = 5;
const old = '<h2 class="class-name">Friend-5</h2>';
const old2 = '<h2 class="class-name">Friend-'+count+'</h2>';
const newOne = `<h2 class="class-name">Friend-${count}</h2>`;
// console.log(newOne);


const freinds = ['Shibly', 'Shanto', 'Alfaz', 'Ritu', 'Shagor'];
for(const friend of freinds){
    const fullNewSystem = `my friend name is ${friend.length} & my Father name is ${friend[2]} After that i want to introduce myself, I'm ${friend[0]} and My Wife's name is ${friend[1]} and lastly my younger sister is ${friend[3]} `;

    console.log(fullNewSystem);
    // console.log(friend);
}