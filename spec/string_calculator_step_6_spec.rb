require './string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "when the input includes numbers bigger than 1000" do
    it_behaves_like 'string calculator', '1001,2', 2
    it_behaves_like 'string calculator', '1000,2', 1002
  end
end
