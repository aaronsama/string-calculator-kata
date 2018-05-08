const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  describe('with a custom delimiter', function() {
    it('returns 6 with input "//;\\n1;2;3"', function() {
      expect(add('//;\n1;2;3')).to.be.equal(6);
    });

    it('returns 6 with input "//;\\n1;2\\n3"', function() {
      expect(add('//;\n1;2\n3')).to.be.equal(6);
    });
  });
});
