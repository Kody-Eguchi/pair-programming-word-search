const wordSearch = (letters, word) => {
//----------------Empty Array---------------//
  if (letters.length === 0) {
    console.log('Please pass a matrix');
    return undefined;
  }
  //----------------Empty Words---------------//
  if (word === undefined) {
    console.log('Please pass a word');
    return undefined;
  }

  //----------------Vertical---------------//
  let verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalJoin.push([]);
  }

  for (let x = 0; x < letters.length; x++) {
    for (let y = 0; y < letters[x].length; y ++) {
      verticalJoin[y].push(letters[x][y]);
    }
  }


  const verticalJoin2 = verticalJoin.map(ls => ls.join(''));
  for (const vl of verticalJoin2) {
    if (vl.includes(word)) return true;
  }


  //----------------horizontal---------------//
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const hl of horizontalJoin) {
    if (hl.includes(word)) return true;
  }

  return false;
};


module.exports = wordSearch;

// ✅ what if word is written vertically but not horizontally?
// ✅ what if matrix is an empty array?
// ✅ empty word
// ✅ add any cases we think are necessary
// ✅write tests for these cases


