let msg = 'Debugging';

function sayHi(){
    debugger;
    console.log('Hi');
}

module.exports = {
    sayHi: sayHi
}