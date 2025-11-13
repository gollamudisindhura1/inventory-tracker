export abstract class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

 
  abstract getPriceWithTax(): number;

  displayDetails(): string {
    return `SKU: ${this.sku}\nName: ${this.name}\nPrice: $${this.price.toFixed(2)}`;
  }
}