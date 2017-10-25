require 'ostruct'
require 'Date'

# 1. Find the first user who signed up for our app:

users = [
  {
    username: 'batman',
    created_at: Date.new(2001,2,3)
  },
  {
    username: 'robin',
    created_at: Date.new(1995,4,14)
  },
  {
    username: 'alfred',
    created_at: Date.new(2014,7,23)
  }
]

first_user = users.min_by { |a| a[:created_at] }

puts first_user

# 2. Find the first customer's account balance

customers = [
  OpenStruct.new(
    credits: [
      OpenStruct.new(
        amount: 45.99
      ),
      OpenStruct.new(
        amount: 9.99
      )
    ],
    debits: [
      OpenStruct.new(
        amount: 34.99
      ),
      OpenStruct.new(
        amount: 24.99
      )
    ]
  ),
  OpenStruct.new(
    credits: [
      OpenStruct.new(
        amount: 35.99
      ),
      OpenStruct.new(
        amount: 75.99
      )
    ],
    debits: [
      OpenStruct.new(
        amount: 346.99
      ),
      OpenStruct.new(
        amount: 1.99
      )
    ]
  )
]

credits = customers[0].credits.sum(&:amount)
debits = customers[0].debits.sum(&:amount)
first_customer_account_balance = debits - credits
puts "Balance: #{first_customer_account_balance}"

# # 3. Remove hair care products from the database

products = [
  {
    category: 'SPORTS'
  },
  {
    category: 'MOVIES'
  },
  {
    category: 'MOVIES'
  },
  {
    category: 'HAIR_CARE'
  },
  {
    category: 'MOVIES'
  },
  {
    category: 'HAIR_CARE'
  }
]

no_hair_care_products = products.delete_if { |product| product[:category] == 'HAIR_CARE'}
puts no_hair_care_products

# # 4. If any item in the array is a number, change it to a String
# # e.g. [1, 2, 'blah'] ===> ['1', '2', 'blah']

things = [23, 43, 'strawberry', 'ruby', 234643234, 'another red thing', 1337]

string_things = things.map { |x| x.class == Numeric ? x : x.to_s }
p string_things

# # 5. Sort customers alphabetically by first and last name:

customers = [
  OpenStruct.new(
    first_name: 'Betty',
    last_name: 'White'
  ),
  OpenStruct.new(
    first_name: 'Alan',
    last_name: 'Arkin'
  ),
  OpenStruct.new(
    first_name: 'Alan',
    last_name: 'Alda'
  )

]

sorted_customers = customers.sort { |a, b| [a.last_name, a.first_name] <=> [b.last_name, b.first_name] }
p sorted_customers

sorted_customers2 = customers.sort_by { |a| [a.last_name, a.first_name] }
p sorted_customers2

# # 6. Return all decorations with blue in their description

decorations = [
  {
    description: 'Blue birthday hat'
  },
  {
    description: 'red balloon'
  },
  {
    description: 'yellow candles'
  },
  {
    description: 'blue confetti'
  }
]

blue_decorations = decorations.select do |decoration|
  decoration[:description].downcase.include?('blue')
end
puts blue_decorations
