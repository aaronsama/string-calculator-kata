require './string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "with negative numbers in the input" do
    it 'raises an exception "negatives not allowed"' do
      expect { StringCalculator.add('-1,2') }.to raise_error.with_message('negatives not allowed')
    end
  end
end
