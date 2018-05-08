const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with an unknown amount of numbers', function() {
    it('returns 6 with input "1,2,3"', function() {
      expect(add('1,2,3')).to.be.equal(6);
    });

    it('returns 0 with input "0,0,0,0,0"', function() {
      expect(add('0,0,0,0,0')).to.be.equal(0);
    });

    it('returns 0 with input "18,0,2,20"', function() {
      expect(add('18,0,2,20')).to.be.equal(40);
    });
  });
});
