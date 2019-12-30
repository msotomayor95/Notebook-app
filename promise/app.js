let calc = require('./promise');

calc.calcular(18,1).then((res) => {
    console.log(res);
}, (error) =>{
    console.log(error);
})

// let promise = new Promise((resolve, reject) => {
//     // resolve('Success!!');
//     reject('ERROR');
// });

// promise.then((result) =>{
//     console.log(result);
// }, (error) => {
//     console.log(error);
// });