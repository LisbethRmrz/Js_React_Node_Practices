function highOrder(data, cb){
    if(!cb || !(typeof cb === 'function')){
        // throw new Error('Invalid callback function!');
        console.log("Invalid callback function!");
    }
    else{        
        console.log(data);
        let result = {message: "I'm cb"};
        let err = true;
        cb(err, result);
        //setTimeout(cb(err, result), 1000);
    }
}

    highOrder("hola", function(err, result) {
        console.log(result.message);
    });

