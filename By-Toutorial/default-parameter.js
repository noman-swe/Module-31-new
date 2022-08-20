/* function add(num1, num2){
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);
 */
//this is a problem, where num2 is not inputed; solution::before ES-6::::

// best solution== value set in parameter
function add(num1, num2 = 0) {
    /*
     solution-1:: 
    
     if(num2 == undefined){
        num2 = 0;
    }
    
    //solution-2::
    num2 = num2 || 0;
    */

    // the rest
    
    const total = num1 + num2;
    return total;

}
const result = add(15, 4);
console.log(result);