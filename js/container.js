"use strict";

import * as creation from "./random_list.js";

const shoppingList = creation.createRandomShoppingList();

function sortItemsByBoughtAttribute(sourceArrey, attribute) {
  let source = JSON.parse(JSON.stringify(sourceArrey));
  let isBoughtFirst = [];
  let isBoughtSecond = [];

  source.forEach(function (Item) {
    if (Item.isBought === attribute) {
      isBoughtFirst.push(Item);
    } else {
      isBoughtSecond.push(Item);
    }
  });

  const sortedItemsByBoughtAttribute = isBoughtFirst.concat(isBoughtSecond);
  return sortedItemsByBoughtAttribute;
}

function sortItemsByAlphabet(sourceArrey, itemName, attribute) {}

// console.log(shoppingList);
console.log(sortItemsByBoughtAttribute(shoppingList, false));
