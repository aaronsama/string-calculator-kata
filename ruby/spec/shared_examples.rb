RSpec.shared_examples 'string calculator' do |input, expected_result|
  subject(:result) { StringCalculator.add(input) }

  it %{returns #{expected_result} with #{input.inspect}} do
    expect(result).to eq(expected_result)
  end
end
