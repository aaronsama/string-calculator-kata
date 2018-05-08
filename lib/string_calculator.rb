module StringCalculator

  class << self
    # Splits a set of comma separated numbers and sums them
    def add(numbers)
      split_numbers = numbers.split(default_delimiter(numbers)).map(&:to_i)
      negative_numbers = split_numbers.select(&:negative?)

      raise "negatives not allowed: #{negative_numbers.join(', ')}" if negative_numbers.any?

      split_numbers.inject(0) do |acc, num|
        acc += num > 1000 ? 0 : num
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
