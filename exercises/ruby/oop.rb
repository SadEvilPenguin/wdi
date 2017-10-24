require 'pry'

# class to build a user object
class User
  attr_accessor :first_name, :last_name, :age, :favorite_color, :full_name

  def initialize(firstname:, lastname: 'Potter', age: 20, favorite_color: 'red')
    @first_name = firstname.capitalize
    @last_name = lastname.capitalize
    @age = age
    @favorite_color = favorite_color
    @full_name = firstname.capitalize + ' ' + lastname.capitalize
  end
end

harry = User.new(firstname: 'Harry', lastname: 'Potter')
puts harry.full_name
puts harry.first_name
puts harry.last_name
puts harry.age
puts harry.favorite_color

# binding.pry

puts 'end of file'
