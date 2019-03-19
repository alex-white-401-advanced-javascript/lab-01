'use strict';

const greet = require('../lib/greet.js');

describe('lib/greet.js', () => {

  it('does not allow non-strings', () => {
    let message = greet.sayHello(1); //number
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello([]); //array
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello({}); //object
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello(null); //null
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello(undefined); //undefined
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello(true); //boolean true
    expect(message).toBeNull();
  });
  it('does not allow non-strings', () => {
    let message = greet.sayHello(false); //boolean false
    expect(message).toBeNull();
  });
  it('returns hello world with world as first argument', () => {
    let message = greet.sayHello('world');
    expect(message).toBe('Hello world');
  });

});
