const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');
    assert.isFalse(result);
  });

  it("should return true if the word is present in a horizontal line", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');
    assert.isTrue(result);
  });

  it("should return true if the array is empty", function() {
    const result = wordSearch([], 'apple');
    assert.isUndefined(result);
  });
  it("should return true if the word is not passed", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'P', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'L', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'P', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'I', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'E', 'G'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'S', 'L'],
    ]);
    assert.isUndefined(result);
  });

  it("should return true if the word is present in a vertical line", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'P', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'P', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'L', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'P', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'I', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'E', 'G'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'S', 'L'],
    ], 'APPLEPIES');
    assert.isTrue(result);
  });
});
