require './lib/string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "when the default delimiter is ;" do
    it_behaves_like 'string calculator', "//;\n1;2;3", 6
    it_behaves_like 'string calculator', "//;\n1;2\n3", 6

    it 'does not recognize , as delimiter' do
      expect(StringCalculator.add("//;\n1,2;3")).not_to eq(3)
    end
  end
end
