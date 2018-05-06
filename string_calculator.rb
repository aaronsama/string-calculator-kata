class StringCalculator

  class << self
    # Splits a set of comma separated numbers and sums them
    def add(numbers)
      split_numbers = numbers.split(default_delimiter(numbers))

      split_numbers.inject(0) do |acc, num|
        number = num.to_i
        raise 'negatives not allowed' if number.negative?
        acc += number
      end
    end

    private

    def default_delimiter(numbers)
      return /,|\n/ unless numbers.start_with?('//')
      %r{^//(?<delimiter>[^\n])\n} =~ numbers
      /#{delimiter}|\n/
    end
  end

end
