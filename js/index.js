function split(numbers) {
  if (numbers.startsWith('//')) {
    const [delimiterDefinition, nums] = numbers.split(/\n([^$]+)/);
    const delimiter = delimiterDefinition.match(/^\/\/(.)/)[1];

    return nums.split(new RegExp(`${delimiter}|\n`));
  } else {
    return numbers.split(/,|\n/);
  }
}

function sumReducer(accumulator, number) {
  return accumulator + parseInt(number);
}

function add(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    return split(numbers).reduce(sumReducer, 0);
  }
}

module.exports = add;
