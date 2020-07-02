"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var inversify_1 = require("inversify");
var category_repository_1 = require("./repositories/category.repository");
var product_repository_1 = require("./repositories/product.repository");
var vendor_repository_1 = require("./repositories/vendor.repository");
var container = new inversify_1.Container();
container.bind(types_1.default.CategoryRepository).to(category_repository_1.CategoryRepository).inSingletonScope();
container.bind(types_1.default.ProductRepository).to(product_repository_1.ProductRepository).inSingletonScope();
container.bind(types_1.default.VendorRepository).to(vendor_repository_1.VendorRepository).inSingletonScope();
exports.default = container;
