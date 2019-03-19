'use strict';

let arithmetic = module.exports = {};

function verifyNumber (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a,b;
}

arithmetic.add = function(a,b) {
  verifyNumber(a,b);
  return a + b;
};

arithmetic.subtract = function (a,b) {
  verifyNumber(a,b);
  return a - b;
};

arithmetic.divide = function (a,b) {
  verifyNumber(a,b);
  return a / b;
};

arithmetic.multiply = function (a,b) {
  verifyNumber(a,b);
  return a * b;
};
