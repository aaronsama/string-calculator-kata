function add(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    const splitNumbers = numbers.split(',')
    return splitNumbers.reduce((accumulator, number) => {
      return accumulator + parseInt(number);
    }, 0);
  }
}

module.exports = add;
