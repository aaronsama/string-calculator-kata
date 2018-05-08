require './lib/string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "when the input is an empty string" do
    it_behaves_like 'string calculator', '', 0
  end

  context "when the input is one number" do
    {
      '0'  => 0,
      '1'  => 1,
      '22' => 22
    }.each do |input, expected_result|
      it_behaves_like 'string calculator', input, expected_result
    end
  end

  context "when the input is two numbers" do
    {
      '1,2'     => 3,
      '0,0'     => 0,
      '111,111' => 222,
    }.each do |input, expected_result|
      it_behaves_like 'string calculator', input, expected_result
    end
  end
end
