// setTimeout(() => {

// }, timeout);

// console.log(1)
// console.log(2)
// console.log(3)
// // setTimeout(() =>{
// //     console.log(3.5)
// // })
// setTimeout(() =>{
//     console.log(3.5)
// }, 4000)
// console.log(4)
// console.log(5)
// console.log(6)

// let num = 0;
// const id = setTimeout(() => {
//     num++;
//     console.log(id, num)
// }, 2000)

let num = 0;
const clockid = setInterval (() => {
    num++;
    if(num > 6){
        clearInterval(clockid);
    }
    console.log(clockid,  num)
},1500)