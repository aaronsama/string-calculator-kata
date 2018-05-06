class StringCalculator

  class << self
    # Splits a set of comma separated numbers and sums them
    def add(numbers)
      split_numbers = numbers.split(default_delimiter(numbers))
      negative_numbers = split_numbers.select { |num| num.to_i.negative? }

      raise "negatives not allowed: #{negative_numbers.join(', ')}" if negative_numbers.any?

      split_numbers.inject(0) do |acc, num|
        acc += num.to_i
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
