'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet.sayHello('JOHN'));
console.log(greet.sayHello('world'));
console.log(math.add(1, 3)); // 4
console.log(math.subtract(1, 3)); // -2
console.log(math.divide(4, 2)); // 2
console.log(math.multiply(2, 2)); // 4
