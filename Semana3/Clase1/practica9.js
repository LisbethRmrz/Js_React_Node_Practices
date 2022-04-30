getValue = (value) => {
    return new Promise((resolve, reject) => {
        if(!(value % 1 == 0)){           
            resolve(value);
        }
        else{
            reject(new Error("Is an integer"));
        }
    })
}

getValue(1.3)
.then(result => {console.log("Success!", result);})
.catch(err => {console.log(err.message);});