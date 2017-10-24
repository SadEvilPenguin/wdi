# class to build a person object
class Person
  attr_accessor :name
  attr_reader :age
  @@people = []

  def initialize(initial_name, initial_age)
    @name = initial_name
    @age = initial_age
    @@people.push(self)
  end

  def say_name
    puts 'Hi, my name is ' + @name + '.'
  end

  def say_age
    puts "I am #{@age} years old."
  end

  def self.get_people
    @@people
  end
end

# Inheritance is indicated using the `<` symbol after the child class' name.
class LoudPerson < Person
  # LoudPerson's `say_name` overrides that of the `Person` class.
  def say_name
    puts "HEY YOU, MY NAME IS #{@name.upcase}!"
  end
end

jill = Person.new('Jill', 10)
bob = LoudPerson.new('Bob', 20)

# Both `say_age` methods produce the same result because it was not overwritten in the `LoudPerson` class.
jill.say_age
# => "I am 10 years old."
bob.say_age
# => "I am 20 years old."

# The `say_name` methods produce different results because the original was overwritten in the `LoudPerson` class.
jill.say_name
# => "My name is Jill."
bob.say_name
# => "HEY YOU, MY NAME IS BOB!"
