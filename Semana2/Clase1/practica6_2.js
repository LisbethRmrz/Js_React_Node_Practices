const range = (start, end) => {
    let array = [];
    for(let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}
let startNumber = 1;
let finalNumber = 6;
console.log(range(startNumber, finalNumber));