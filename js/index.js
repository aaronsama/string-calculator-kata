// split the string according to the delimiter defined at the
// beginning of the string or at ','
function split(numbers) {
  if (numbers.startsWith('//')) {
    const [delimiterDefinition, nums] = numbers.split(/\n([^$]+)/);
    const delimiter = delimiterDefinition.match(/^\/\/(.)/)[1];

    return nums.split(new RegExp(`${delimiter}|\n`));
  } else {
    return numbers.split(/,|\n/);
  }
}

// find all the negative numbers in an array
function negatives(numbers) {
  return numbers.filter((number) => number < 0)
}

// sum all the numbers but filter those larger than 1000
function sumReducer(accumulator, number) {
  const num = parseInt(number);

  if (num <= 1000) {
    return accumulator + num;
  } else {
    return accumulator;
  }
}

function add(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    const splitNumbers = split(numbers);
    const negativeNumbers = negatives(splitNumbers)

    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbers}`)
    } else {
      return split(numbers).reduce(sumReducer, 0);
    }
  }
}

module.exports = add;
