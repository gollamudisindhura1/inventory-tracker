"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayDetails = function () {
        return "SKU: ".concat(this.sku, "\nName: ").concat(this.name, "\nPrice: $").concat(this.price.toFixed(2));
    };
    return Product;
}());
exports.Product = Product;
