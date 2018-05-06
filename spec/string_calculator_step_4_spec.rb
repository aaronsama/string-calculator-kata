require './string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "when the default delimiter is ;" do
    it_behaves_like 'string calculator', "//;\n1;2;3", 6
    it_behaves_like 'string calculator', "//;\n1;2\n3", 6
  end
end
