const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with a newline as separator', function() {
    it('returns 6 with input "1\\n2,3"', function() {
      expect(add('1\n2,3')).to.be.equal(6);
    });

    it('returns 6 with input "1\\n2\\n3"', function() {
      expect(add('1\n2\n3')).to.be.equal(6);
    });
  });
});
