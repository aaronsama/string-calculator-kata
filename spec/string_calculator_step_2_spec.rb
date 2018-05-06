require './string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  subject(:calculator) { StringCalculator }

  context "when the input is n numbers" do
    it_behaves_like 'string calculator', '1,2,3', 6
  end
end
