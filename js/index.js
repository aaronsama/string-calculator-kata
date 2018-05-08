function sumReducer(accumulator, number) {
  return accumulator + parseInt(number);
}

function add(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    const splitNumbers = numbers.split(',')
    return splitNumbers.reduce(sumReducer, 0);
  }
}

module.exports = add;
