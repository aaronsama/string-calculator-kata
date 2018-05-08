const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with numbers larger than 1000', function() {
    it('ignores numbers larger than 1000', function() {
      expect(add('2,1001')).to.be.equal(2);
    });

    it('returns 1002 with input "2,1000"', function() {
      expect(add('2,1000')).to.be.equal(1002);
    });
  });
});
