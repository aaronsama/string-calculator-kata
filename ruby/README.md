# String Calculator Kata

My implementation of the popular String Calculator Kata (original description: http://osherove.com/tdd-kata-1) in Ruby up to step 6, which means it does the following:
* sums an unlimited amount of comma separated numbers provided as a string
* allows for custom separators to be defined at the beginning of the string using the format `//[delimiter]\n[your numbers]`
* throws an exception if negative numbers are detected
* filters out numbers larger than 1000

## You will need

* Ruby: I suggest installing it via `rbenv` (https://github.com/rbenv/rbenv) and not via the package manager of your OS.
* RSpec: `gem install rspec`

## Running from CLI

Launch the CLI script

```
./string_calculator_cli.rb
# or
ruby string_calculator_cli.rb
```

The input is read from STDIN. Use CTRL+D (on Unix systems) to terminate input with an EOF.

## Testing

After installing RSpec just type `rspec`.

The tests are organized in steps that correspond to steps 1-6 of the kata.
