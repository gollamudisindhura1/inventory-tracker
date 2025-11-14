import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';

const inventory = [
  new PhysicalProduct('LAPTOP', 'Gaming Laptop', 1200, 2.5),
  new PhysicalProduct('PHONE', 'iPhone 17', 1200, 0.2),
  new DigitalProduct('GAME', 'Minecraft', 26.95, 120),
];

console.log('INVENTORY TRACKER');


inventory.forEach((p, i) => {
  console.log(`${i + 1}. ${p.name} (${p.sku})`);
  console.log(`   Base: $${p.price.toFixed(2)}`);
  console.log(`   Final: $${p.getPriceWithTax().toFixed(2)}`);
  

  const originalPrice = p.price;
  p.applyDiscount(15);
  console.log(`   After 15 % OFF: $${p.price.toFixed(2)}`);
  if ('weight' in p) {
    console.log(`   Weight: ${(p as PhysicalProduct).weight}`);
  } else {
    console.log(`   File Size: ${(p as DigitalProduct).fileSize}`);
  }

  console.log(`   Tax: $${calculateTax(p).toFixed(2)}`);

});