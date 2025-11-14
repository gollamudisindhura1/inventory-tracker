"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhysicalProduct_1 = require("./models/PhysicalProduct");
var DigitalProduct_1 = require("./models/DigitalProduct");
var taxCalculator_1 = require("./utils/taxCalculator");
var inventory = [
    new PhysicalProduct_1.PhysicalProduct('LAPTOP', 'Gaming Laptop', 1200, 2.5),
    new PhysicalProduct_1.PhysicalProduct('PHONE', 'iPhone 17', 1200, 0.2),
    new DigitalProduct_1.DigitalProduct('GAME', 'Minecraft', 26.95, 120),
];
console.log('INVENTORY TRACKER');
inventory.forEach(function (p, i) {
    console.log("".concat(i + 1, ". ").concat(p.name, " (").concat(p.sku, ")"));
    console.log("   Base: $".concat(p.price.toFixed(2)));
    console.log("   Final: $".concat(p.getPriceWithTax().toFixed(2)));
    var originalPrice = p.price;
    p.applyDiscount(15);
    console.log("   After 15 % OFF: $".concat(p.price.toFixed(2)));
    if ('weight' in p) {
        console.log("   Weight: ".concat(p.weight));
    }
    else {
        console.log("   File Size: ".concat(p.fileSize));
    }
    console.log("   Tax: $".concat((0, taxCalculator_1.calculateTax)(p).toFixed(2)));
});
