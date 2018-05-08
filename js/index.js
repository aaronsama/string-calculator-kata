// split the string according to the delimiter defined at the
// beginning of the string or at ','
function split(numbers) {
  let delimiter = ',';
  let nums = numbers;

  if (numbers.startsWith('//')) {
    delimiter = numbers.match(new RegExp('//(.)\n'))[1];
    nums = numbers.match(new RegExp(`^//${delimiter}\n([^$]+)$`))[1];
  }

  return nums.split(new RegExp(`${delimiter}|\n`)).map((num) => parseInt(num));
}

// find all the negative numbers in an array
function negatives(numbers) {
  return numbers.filter((number) => number < 0);
}

// sum all the numbers but filter those larger than 1000
function sumReducer(accumulator, number) {
  if (number <= 1000) {
    return accumulator + number;
  } else {
    return accumulator;
  }
}

function add(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    const splitNumbers = split(numbers);
    const negativeNumbers = negatives(splitNumbers);

    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbers}`);
    } else {
      return split(numbers).reduce(sumReducer, 0);
    }
  }
}

module.exports = add;
