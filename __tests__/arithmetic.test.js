'use strict';

const math = require('../lib/arithmetic.js');

describe('lib/arithmetic.js', () => {
  it('Addition proper use', () => {
    let equation = math.add(1,2);
    expect(equation).toBe(3);
  });
  it('Addition improper use', () => {
    let equation = math.add(1,true);
    expect(equation).toBeNull();
  });
  it('Subtraction proper use', () => {
    let equation = math.subtract(5,2);
    expect(equation).toBe(3);
  });
  it('Subtraction improper use', () => {
    let equation = math.subtract(3,null);
    expect(equation).toBeNull();
  });
  it('Division proper use', () => {
    let equation = math.divide(8,4);
    expect(equation).toBe(2);
  });
  it('Division improper use', () => {
    let equation = math.divide(10,'m');
    expect(equation).toBeNull();
  });
  it('Multiplication proper use', () => {
    let equation = math.multiply(3,2);
    expect(equation).toBe(6);
  });
  it('Multiplication improper use', () => {
    let equation = math.multiply('q',undefined);
    expect(equation).toBeNull();
  });

});
