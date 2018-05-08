require './lib/string_calculator'
require './spec/shared_examples'

describe StringCalculator, '#add' do
  context "when the input uses \\n as delimiter" do
    it_behaves_like 'string calculator', "1\n2\n3", 6
  end

  context "when the input uses both , and \\n as delimiter" do
    it_behaves_like 'string calculator', "1\n2,3", 6
  end
end
