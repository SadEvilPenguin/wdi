# class to create a member object
class Member
  attr_reader :full_name

  def initialize(full_name)
    @full_name = full_name
  end

  def introduce
    puts "Hi, my name is #{@full_name}"
  end
end

# class to create student object
class Student < Member
  attr_reader :reason

  def initialize(full_name, reason)
    super(full_name)
    @reason = reason
  end
end

# class to create instructor object
class Instructor < Member
  attr_reader :bio, :skills

  def initialize(full_name, bio, skills = [])
    super(full_name)
    @bio = bio
    @skills = skills
  end

  def add_skill(skill)
    @skills << skill
  end
end

# class to create workshop object
class Workshop
  def initialize(date, classroom, instructors = [], students = [])
    @date = date
    @classroom = classroom
    @instructors = instructors
    @students = students
  end

  def add_participant(participent)
    if participent.class == Student
      @students << participent
    elsif participent.class == Instructor
      @instructors << participent
    end
  end

  def print_details
    puts @date
    puts @classroom
    puts 'Instructors: '
    print_instructors
    puts 'Students: '
    print_students
  end

  private

  def print_students
    @students.each_with_index do |val,index|
      puts "#{index + 1}. #{val.full_name} - #{val.reason}"
    end
  end

  def print_instructors
    @instructors.each_with_index do |val,index|
      puts "#{index + 1}. #{val.full_name} - #{val.skills}"
      puts val.bio
    end
  end
end

workshop = Workshop.new("12/03/2014", "Shutl")

jane = Student.new('Jane Doe', 'I am trying to learn programming and need some help')
lena = Student.new('Lena Smith', 'I am really excited about learning to program!')
vicky = Instructor.new('Vicky Ruby', 'I want to help people learn coding.')
vicky.add_skill('HTML')
vicky.add_skill('JavaScript')
nicole = Instructor.new('Nicole McMillan', 'I have been programming for 5 years in Ruby and want to spread the love')
nicole.add_skill('Ruby')

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details
