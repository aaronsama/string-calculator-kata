#! /usr/bin/env ruby

require './lib/string_calculator'

res = StringCalculator.add STDIN.read
puts "RESULT: #{res}"
