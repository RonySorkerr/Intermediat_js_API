const myLoader = () =>{
    return new promise((resolve, reject) => {
        const success=  Math.random();
        console.log(success)
        if(success <= 0.6){
            resolve(success)
        }
        else{
            reject(success);
        }
    })
}


myLoader()
.then(data=>console.log(data))