const _ = require('lodash');
const argv = require('yargs').argv;

// console.log(argv);

// let command = process.argv[2];

if (argv.user === 'Marco') {
    let x = { 'Name': 'Marco' };
    let y = { 'Nickname': 'Kyo' };
    let z = [
        { firstName: 'Marco', lastName: 'Sotomayor', age: '24' },
        { firstName: 'Antonio', lastName: 'Sotomayor', age: '50' }
    ];

    // let result = _.assign(x, y);
    // console.log(result);

    // _.times(3, ()=> console.log('mememe!'));

    let resultado = _.find(z, { firstName: 'Marco' })
    console.log(resultado);
} else {
    console.log('Invalid User');
}


