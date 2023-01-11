"use strict";

const { floor, ceil, round, random } = Math;

let shoppingList = [];

const prefixProductName = [
  "anti",
  "analgi",
  "aspi",
  "mega",
  "sub",
  "oxy",
  "giga",
  "nitro",
  "sulpha",
  "hydro",
  "dihydro",
  "norma",
];

const suffixProductName = ["beta", "gamma", "delta", "aqua", "vita", "tetra"];

const postfixProductName = [
  "zin",
  "rin",
  "ron",
  "mol",
  "ran",
  "ter",
  "ton",
  "tonid",
  "git",
  "nod",
  "tin",
  "lon",
  "lin",
  "nilin",
];

const realisticProductName = [
  "thermometer",
  "tonometer",
  "glucometer",
  "blood pressure meter",
  "bandage",
  "cotton wool",
  "cotton swabs",
  "cotton pads",
  "syringe for injections",
  "plaster",
  "antiseptic",
  "contraceptive",
  "protective mask",
]; /* dictionaries of drug names parts */

function Item(product, isBought, quantity, price) {
  this.product = String(product);
  this.isBought = Boolean(isBought);
  this.quantity = Number(round(quantity));
  this.price = Number(price);
  this.sum = Number((price * quantity).toFixed(2));
} /* create an instance of the object using the onstructor function */

function createCompoundedProduct() {
  let compoundedProduct = "";

  if (round(random())) {
    compoundedProduct =
      realisticProductName[floor(random() * prefixProductName.length)];
  } else {
    compoundedProduct =
      prefixProductName[floor(random() * prefixProductName.length)] +
      suffixProductName[floor(random() * suffixProductName.length)] +
      postfixProductName[floor(random() * postfixProductName.length)];
  }

  return compoundedProduct;
} /* create random product name */

function createRandomValues() {
  const randomProduct = createCompoundedProduct();
  const randomIsBought = round(random());
  const randomQuantity = ceil(random() * 10);
  const randomPrice = (random() * 50).toFixed(2);

  return {
    product: randomProduct,
    isBought: randomIsBought,
    quantity: randomQuantity,
    price: randomPrice,
  };
} /* create values for the object keys */

function addNewItem() {
  let listItem = new Item(
    createRandomValues().product,
    createRandomValues().isBought,
    createRandomValues().quantity,
    createRandomValues().price
  );
  return shoppingList.push(listItem);
} /* add new object to array - future shopping list */

function createRandomShoppingList() {
  for (let index = 0; index < round(random() * 4) + 6; index++) {
    addNewItem();
  }

  return shoppingList;
} /* create complete shopping list from 4 to 10 items */

function returnCompleteShoppingList() {
  shoppingList = []; /* prevent to duplicate array */
  shoppingList = createRandomShoppingList();

  return [
    ...new Map(shoppingList.map((item) => [item["product"], item])).values(),
  ];
} /* final step: create complete shopping list without duplicates */

export { Item, returnCompleteShoppingList };
