require './string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  subject(:calculator) { StringCalculator }

  context "when the input is n numbers" do
    {
      '1,2,3'   => 6,
      '0,0,0,0' => 0,
      '1,0,4,5' => 10
    }.each do |input, expected_result|
      it_behaves_like 'string calculator', input, expected_result
    end
  end
end
