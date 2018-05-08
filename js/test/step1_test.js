const { describe, it } = require('mocha');
const assert = require('assert');
const add = require('../');

describe('add', function() {
  it('returns 0 with empty input', function() {
    assert.equal(add(''), 0);
  })
});
