class StringCalculator

  class << self
    # Splits a set of comma separated numbers and sums them
    def add(numbers)
      numbers.split(default_delimiter(numbers))
             .inject(0) { |acc, num| acc += num.to_i }
    end

    private

    def default_delimiter(numbers)
      return /,|\n/ unless numbers.start_with?('//')
      %r{^//(?<delimiter>[^\n])\n} =~ numbers
      /#{delimiter}|\n/
    end
  end

end
