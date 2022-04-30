getValue = (value) => {
    return new Promise((resolve, reject) => {
        if(!(value % 1 == 0)){           
            resolve(value);
        }
        else{
            reject();
        }
    })
}

getValue(1.2)
.then(result => {console.log("Success!,", result);})
.catch(err => {console.log("Can't resolve your value");});