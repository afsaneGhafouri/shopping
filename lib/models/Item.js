import Product from "./Product";

export default class Item extends Product {
 constructor(product) {
  super(product.sku, product.name, product.price)
   this.finalPrice = product.price;
 }
}
