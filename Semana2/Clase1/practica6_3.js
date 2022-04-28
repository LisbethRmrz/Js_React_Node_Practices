const sum = (array) => {
    let varSum = 0;
    for(let i=0; i<array.length; i++){
        varSum += array[i];
    }
    return varSum;
}

let array = [0,1,2,3];
console.log(sum(array));