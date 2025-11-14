"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
var Product_1 = require("./Product");
var PhysicalProduct = /** @class */ (function (_super) {
    __extends(PhysicalProduct, _super);
    function PhysicalProduct(sku, name, price, _weight) {
        var _this = _super.call(this, sku, name, price) || this;
        _this._weight = _weight;
        return _this;
    }
    // 10% tax for physical items
    PhysicalProduct.prototype.getPriceWithTax = function () {
        return this.price * 1.10;
    };
    Object.defineProperty(PhysicalProduct.prototype, "weight", {
        get: function () {
            return "".concat(this._weight, " kg");
        },
        enumerable: false,
        configurable: true
    });
    PhysicalProduct.prototype.applyDiscount = function (percentage) {
        if (percentage < 0 || percentage > 100)
            return;
        this.price = this.price * (1 - percentage / 100);
    };
    return PhysicalProduct;
}(Product_1.Product));
exports.PhysicalProduct = PhysicalProduct;
