require './string_calculator'

describe StringCalculator, '#add' do
  subject(:calculator) { StringCalculator }

  context "when the input is n numbers" do
    it "sums the numbers" do
      expect(calculator.add('1,2,3')).to eq(6)
    end
  end
end
