module.exports = function toReadable (number) {
  const numWords = {
    numWordSingls: {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    },
    numWordDozens: {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    }
  };
  
  let tempArr = number.toString().split('');
  if (tempArr.length <= 2) {
    if (number < 20) {
      return numWords.numWordSingls[number];
    } else {
      if (number % 10 == 0) {
        return `${numWords.numWordDozens[tempArr[0]]}`;
      } else {
        return `${numWords.numWordDozens[tempArr[0]]} ${numWords.numWordSingls[tempArr[1]]}`;
      }
    }
  } else if (tempArr.length == 3) {
    if (number % 100 == 0) {
      return `${numWords.numWordSingls[tempArr[0]]} hundred`;
    } else if (number % 10 == 0) {
      return `${numWords.numWordSingls[tempArr[0]]} hundred ${numWords.numWordDozens[tempArr[1]]}`;
    } else if (number % 100 < 20) {
      return `${numWords.numWordSingls[tempArr[0]]} hundred ${numWords.numWordSingls[number % 100]}`;
    } else {
      return `${numWords.numWordSingls[tempArr[0]]} hundred ${numWords.numWordDozens
      [tempArr[1]]} ${numWords.numWordSingls[tempArr[2]]}`;
    }
  }
  return `number: ${number} is greater than the allowable. Max number 1000`
}
