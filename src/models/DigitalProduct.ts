import { Product } from './Product';

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private _fileSize: number
  ) {
    super(sku, name, price);
  }
  
  // 0% tax for digital items
  getPriceWithTax(): number {
    return this.price;
  }

  get fileSize(): string {
    return `${this._fileSize} MB`;
  }
}