"use strict";

const shoppingList = [];

const preProductList = [
  "analgi",
  "aspi",
  "mega",
  "super",
  "giga",
  "nitro",
  "dihydro",
];
const sufProductList = ["anti", "beta", "gamma"];
const postProductList = ["zin", "rin", "ron", "mol", "ran", "ter", "ton"];

function Item(product, isBought, quantity, price) {
  this.product = String(product);
  this.isBought = Boolean(isBought);
  this.quantity = Number(Math.round(quantity));
  this.price = Number(price.toFixed(2));
  this.sum = Number((price * quantity).toFixed(2));
}

function createRandomValues() {
  const randomProduct =
    preProductList[Math.round(Math.random() * preProductList.length)] +
    sufProductList[Math.round(Math.random() * sufProductList.length)] +
    postProductList[Math.round(Math.random() * postProductList.length)];
  const randomIsBought = Math.random() >= 0.5;
  const randomQuantity = (Math.random() * 10).toFixed(0);
  const randomPrice = Math.random() * 100;

  return {
    product: randomProduct,
    isBought: randomIsBought,
    quantity: randomQuantity,
    price: randomPrice,
  };
}

function addNewItem() {
  let listItem = new Item(
    createRandomValues().product,
    createRandomValues().isBought,
    createRandomValues().quantity,
    createRandomValues().price
  );
  return shoppingList.push(listItem);
}

function createRandomShoppingList() {
  for (let index = 0; index < Math.round(Math.random() * 5) + 5; index++) {
    addNewItem();
  }

  return shoppingList;
}

export { Item, createRandomValues, addNewItem, createRandomShoppingList };
