# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:


AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

Category.create(category_name: "Axe")
Category.create(category_name: "Dagger")
Category.create(category_name: "Sword")
Category.create(category_name: "Knife")
Category.create(category_name: "EDC")

Product.create(category_id: '5', product_name: 'EDC product1', full_length: '20', blade_length: '18', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '70')
Product.create(category_id: '5', product_name: 'EDC product2', full_length: '30', blade_length: '17', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '140')
Product.create(category_id: '5', product_name: 'EDC product3', full_length: '40', blade_length: '16', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '80')
Product.create(category_id: '5', product_name: 'EDC product4', full_length: '50', blade_length: '15', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '470')
Product.create(category_id: '5', product_name: 'EDC product5', full_length: '50', blade_length: '14', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '120')
Product.create(category_id: '5', product_name: 'EDC product6', full_length: '60', blade_length: '13', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '150')
Product.create(category_id: '5', product_name: 'EDC product7', full_length: '60', blade_length: '12', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '90')
Product.create(category_id: '5', product_name: 'EDC product8', full_length: '80', blade_length: '10', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '40')
Product.create(category_id: '5', product_name: 'EDC product9', full_length: '80', blade_length: '19', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '30')

Product.create(category_id: '4', product_name: 'Knives product1', full_length: '20', blade_length: '18', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '70')
Product.create(category_id: '4', product_name: 'Knives product2', full_length: '30', blade_length: '17', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '140')
Product.create(category_id: '4', product_name: 'Knives product3', full_length: '40', blade_length: '16', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '80')
Product.create(category_id: '4', product_name: 'Knives product4', full_length: '50', blade_length: '15', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '470')
Product.create(category_id: '4', product_name: 'Knives product5', full_length: '50', blade_length: '14', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '120')
Product.create(category_id: '4', product_name: 'Knives product6', full_length: '60', blade_length: '13', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '150')
Product.create(category_id: '4', product_name: 'Knives product7', full_length: '60', blade_length: '12', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '90')
Product.create(category_id: '4', product_name: 'Knives product8', full_length: '80', blade_length: '10', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '40')
Product.create(category_id: '4', product_name: 'Knives product9', full_length: '80', blade_length: '19', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '30')

Product.create(category_id: '3', product_name: 'Swords product1', full_length: '20', blade_length: '18', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '70')
Product.create(category_id: '3', product_name: 'Swords product2', full_length: '30', blade_length: '17', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '140')
Product.create(category_id: '3', product_name: 'Swords product3', full_length: '40', blade_length: '16', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '80')
Product.create(category_id: '3', product_name: 'Swords product4', full_length: '50', blade_length: '15', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '470')
Product.create(category_id: '3', product_name: 'Swords product5', full_length: '50', blade_length: '14', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '120')
Product.create(category_id: '3', product_name: 'Swords product6', full_length: '60', blade_length: '13', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '150')
Product.create(category_id: '3', product_name: 'Swords product7', full_length: '60', blade_length: '12', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '90')
Product.create(category_id: '3', product_name: 'Swords product8', full_length: '80', blade_length: '10', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '40')
Product.create(category_id: '3', product_name: 'Swords product9', full_length: '80', blade_length: '19', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '30')

Product.create(category_id: '2', product_name: 'Dagger product1', full_length: '20', blade_length: '18', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '70')
Product.create(category_id: '2', product_name: 'Dagger product2', full_length: '30', blade_length: '17', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '140')
Product.create(category_id: '2', product_name: 'Dagger product3', full_length: '40', blade_length: '16', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '80')
Product.create(category_id: '2', product_name: 'Dagger product4', full_length: '50', blade_length: '15', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '470')
Product.create(category_id: '2', product_name: 'Dagger product5', full_length: '50', blade_length: '14', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '120')
Product.create(category_id: '2', product_name: 'Dagger product6', full_length: '60', blade_length: '13', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '150')
Product.create(category_id: '2', product_name: 'Dagger product7', full_length: '60', blade_length: '12', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '90')
Product.create(category_id: '2', product_name: 'Dagger product8', full_length: '80', blade_length: '10', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '40')
Product.create(category_id: '2', product_name: 'Dagger product9', full_length: '80', blade_length: '19', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '30')

Product.create(category_id: '1', product_name: 'Axe product1', full_length: '20', blade_length: '18', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '70')
Product.create(category_id: '1', product_name: 'Axe product2', full_length: '30', blade_length: '17', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '140')
Product.create(category_id: '1', product_name: 'Axe product3', full_length: '40', blade_length: '16', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '80')
Product.create(category_id: '1', product_name: 'Axe product4', full_length: '50', blade_length: '15', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '470')
Product.create(category_id: '1', product_name: 'Axe product5', full_length: '50', blade_length: '14', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '120')
Product.create(category_id: '1', product_name: 'Axe product6', full_length: '60', blade_length: '13', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '150')
Product.create(category_id: '1', product_name: 'Axe product7', full_length: '60', blade_length: '12', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '90')
Product.create(category_id: '1', product_name: 'Axe product8', full_length: '80', blade_length: '10', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '40')
Product.create(category_id: '1', product_name: 'Axe product9', full_length: '80', blade_length: '19', handle_length: '5', material: 'iron', sheath: 'true', product_description: 'asd asdasd', price: '30')