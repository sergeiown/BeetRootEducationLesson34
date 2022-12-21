"use strict";

import * as normal from "./normal.js";

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
const randomProduct =
  preProductList[Math.floor(Math.random() * preProductList.length)] +
  postProductList[Math.floor(Math.random() * postProductList.length)];
const randomIsBought = Math.random() >= 0.5;
const randomQuantity = (Math.random() * 9 + 1).toFixed(0);
const randomPrice = Math.random() * 100;

function addNewItem(product, isBought, quantity, price) {
  let listItem = new normal.Item(product, isBought, quantity, price);
  shoppingList.push(listItem);
}

for (let index = 0; index < (Math.random() * 5 + 5).toFixed(0); index++) {
  addNewItem(randomProduct, randomIsBought, randomQuantity, randomPrice);
}

console.log(shoppingList);
console.log(shoppingList.length);
