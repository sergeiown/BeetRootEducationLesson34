"use strict";

const { floor, ceil, round, random } = Math;

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
  this.quantity = Number(round(quantity));
  this.price = Number(price.toFixed(2));
  this.sum = Number((price * quantity).toFixed(2));
}

function createRandomValues() {
  const randomProduct =
    preProductList[floor(random() * preProductList.length)] +
    sufProductList[floor(random() * sufProductList.length)] +
    postProductList[floor(random() * postProductList.length)];
  const randomIsBought = round(random());
  const randomQuantity = ceil(random() * 10);
  const randomPrice = random() * 100;

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
  for (let index = 0; index < round(random() * 5) + 5; index++) {
    addNewItem();
  }

  return shoppingList;
}

export { Item, createRandomValues, addNewItem, createRandomShoppingList };
