"use strict";

const shoppingList = [];

const preProductList = [
  "analgi",
  "aspi",
  "mega",
  "supe",
  "giga",
  "nitro",
  "dihydro",
];
const postProductList = ["zin", "rin", "ron", "mol", "ran", "ter", "ton"];

function Item(product, isBought, quantity, price) {
  this.product = String(product);
  this.isBought = Boolean(isBought);
  this.quantity = Number(Math.round(quantity));
  this.price = Number(price.toFixed(2));
  this.sum = Number((price * quantity).toFixed(2));
}

function addNewItem(product, isBought, quantity, price) {
  let listItem = new Item(product, isBought, quantity, price);
  return shoppingList.push(listItem);
}

function createRandomShoppingList() {
  for (let index = 0; index < (Math.random() * 5 + 5).toFixed(0); index++) {
    const randomProduct =
      preProductList[Math.floor(Math.random() * preProductList.length)] +
      postProductList[Math.floor(Math.random() * postProductList.length)];
    const randomIsBought = Math.random() >= 0.5;
    const randomQuantity = (Math.random() * 9 + 1).toFixed(0);
    const randomPrice = Math.random() * 100;

    addNewItem(randomProduct, randomIsBought, randomQuantity, randomPrice);
  }
  return shoppingList;
}

export { Item, addNewItem, createRandomShoppingList };
