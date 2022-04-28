const range = (start, end, step = 1) => {
    let array = [];
    for(let i = start; i <= end; i+=step){
        array.push(i);
    }
    return array;
}
let startNumber = 0;
let finalNumber = 12;
let stepNumber = 3;
console.log(range(startNumber, finalNumber, stepNumber));
//console.log(range(startNumber, finalNumber));