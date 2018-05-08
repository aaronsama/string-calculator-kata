const { describe, it } = require('mocha');
const { expect } = require('chai');
const add = require('../');

describe('add', function() {
  it('returns 0 with empty input', function() {
    expect(add('')).to.be.equal(0)
  })
});
