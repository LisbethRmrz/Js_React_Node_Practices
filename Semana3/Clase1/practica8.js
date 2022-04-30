function highOrder(data, cb){
    if(!cb || !(typeof cb === 'function')){
        throw new Error('Invalid callback function!');
    }
    else{        
        console.log(data);
        setTimeout(cb, 10);
    }
}

try{
    highOrder("Data Message", function cb(err = "I'm an Error Message", result = "I'm a Result Message"){
        console.log(err);
        console.log(result);
    })  //Valid Callback

    // highOrder("Data Message", cb = 12); // Invalid Callback
}
catch(Error){
    console.log(Error.message);
}
