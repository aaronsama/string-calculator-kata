require './string_calculator'

describe StringCalculator, '#add' do
  subject(:calculator) { StringCalculator }

  context "when the input is an empty string" do
    it "returns 0" do
      expect(calculator.add('')).to eq(0)
    end
  end

  context "when the input is one number" do
    it 'returns 0 with input "0"' do
      expect(calculator.add('0')).to eq(0)
    end

    it 'returns 1 with input "1"' do
      expect(calculator.add('1')).to eq(1)
    end

    it 'returns 22 with input "22"' do
      expect(calculator.add('22')).to eq(22)
    end
  end
end
