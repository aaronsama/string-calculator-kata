class StringCalculator

  class << self
    # Splits a set of comma separated numbers and sums them
    def add(numbers)
      numbers.split(/,|\n/)
             .inject(0) { |acc, num| acc += num.to_i }
    end
  end

end
