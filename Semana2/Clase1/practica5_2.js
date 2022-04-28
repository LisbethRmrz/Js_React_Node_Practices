for(let i = 1; i <= 100; i++){
    let varFizz = (i%3);
    let varBuzz = (i%5);
    if (varFizz==0 && varBuzz==0){
        console.log(`${i} is: `+"FizzBuzz");
    }
    else if(varFizz == 0){
        console.log(`${i} is: `+"Fizz");
    }
    else if(varBuzz == 0){
        console.log(`${i} is: `+"Buzz");
    }
    else{
    console.log(i);
    }
}