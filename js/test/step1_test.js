const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with empty input', function() {
    it('returns 0', function() {
      expect(add('')).to.be.equal(0);
    });
  });

  describe('with a single number in the input', function() {
    // some examples with a single number
    it('returns 0 with input "0"', function() {
      expect(add('0')).to.be.equal(0);
    });

    it('returns 1 with input "1"', function() {
      expect(add('1')).to.be.equal(1);
    });

    it('returns 27 with input "27"', function() {
      expect(add('27')).to.be.equal(27);
    });
  });

  describe('with two numbers in the input', function () {
    it('returns 3 with input "1,2"', function () {
      expect(add('1,2')).to.be.equal(3);
    });

    it('returns 2 with input "1,1"', function() {
      expect(add('1,1')).to.be.equal(2);
    })

    it('returns 0 with input "0,0"', function () {
      expect(add('0,0')).to.be.equal(0);
    });
  });
});
