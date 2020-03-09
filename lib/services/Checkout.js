import Item from "../models/Item";

export default class Checkout {
 constructor(pricingRule) {
  this.cart = [];
  this.pricingRule = pricingRule;
  this.finalPrice = 0.0;
  this.totalPrice = 0.0;
 }
 scan(product) {
  const item = new Item(product)
  this.cart.push(item)
 }

 getFinalPrice() {
  this.cart = this.pricingRule.updateCart(this.cart)
  this.cart.map(item => {
   this.finalPrice += item.finalPrice
   this.totalPrice += item.price
  })
  return this.finalPrice
 }
}