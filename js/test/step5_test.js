const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with negative numbers in the input', function() {
    it('throws an exception', function() {
      const addWithNegatives = () => add('-1,2');
      expect(addWithNegatives).to.throw('negatives not allowed');
    });

    it('has the negative numbers in the exception message', function() {
      const addWithNegatives = () => add('-1,-2,15');
      expect(addWithNegatives).to.throw('-1,-2');
    });
  });
});
