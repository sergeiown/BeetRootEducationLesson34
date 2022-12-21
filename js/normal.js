"use strict";

function Item(product, isBought, quantity, price) {
  this.product = String(product);
  this.isBought = Boolean(isBought);
  this.quantity = Number(Math.round(quantity));
  this.price = Number(price.toFixed(2));
  this.sum = Number((price * quantity).toFixed(2));
}

export { Item };
