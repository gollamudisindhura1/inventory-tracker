# Inventory Tracker

This project is a prototype inventory tracker designed to manage both physical and digital products. It explains the core TypeScript and OOPS concepts:

- Classes
- Inheritance
- Encapsulation
- Polymorphism
- Interfaces
- Modules
The main goal of this lab is to practice writing code using TypeScript and OOPS.

## Features:

I created a Product Class()
- The properties are: sku, nmae, price
The methods I created
- displayDetails() - which returns the product details
- getPriceWithTax() - this method calculates final price with tax and with no tax
## PhysicalProduct extends Product
- Adds weight property
- Overrides getPriceWithTax() to apply 10% tax
- getter formats the weight in kg.
## DigitalProduct extends Products
- Adds fileSize property
- Overrides getPriceWithTax() with no tax 
- getter formats file size in MB

## taxCalculator.ts
- created a function calculateTax()
- Accepts any Product
- Returns product price with appropriate tax

## Main Program - main.ts
- This creates physical and digitaal products
- Stores them in an array
- Loops through each product and 
    - Display details and
    - Calls getPriceWithTax()
_ I used polymorphsim where same method works differently for each product.


