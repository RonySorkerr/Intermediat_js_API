// const myLoader = () =>{
//     return new promise((resolve, reject) => {
//         const success=  Math.random();
//         console.log(success)
//         if(success <= 0.6){
//             resolve(success)
//         }
//         else{
//             reject(success);
//         }
//     })
// }


// myLoader()
// .then(data=>console.log(data))
async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
   }
   f();
   