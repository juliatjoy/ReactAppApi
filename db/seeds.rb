# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u = User.new
u.email = 'react_admin@7nodes.com'
u.role = 'admin'
u.first_name = 'admin'
u.last_name = 'react'
u.contact = '1234567890'
u.password = '123qwe'
u.password_confirmation = '123qwe'
u.save
puts 'Created Admin'

u = User.new
u.email = 'react_user@7nodes.com'
u.role = 'user'
u.first_name = 'user'
u.last_name = 'react'
u.contact = '1234567890'
u.password = '123qwe'
u.password_confirmation = '123qwe'
u.save
puts 'Created User'
