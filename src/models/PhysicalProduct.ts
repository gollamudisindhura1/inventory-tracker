import { Product } from './Product';

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private _weight: number
  ) {
    super(sku, name, price);
  }


  // 10% tax for physical items
  getPriceWithTax(): number {
    return this.price * 1.10;
  }

  get weight(): string {
    return `${this._weight} kg`;
  }

applyDiscount(percentage: number): void{
  if (percentage <0 || percentage>100)
    return;
  this.price = this.price * (1-percentage/100);
}
}