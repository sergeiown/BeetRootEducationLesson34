"use strict";

import * as creation from "./random_list_creation.js";

const shoppingList = creation.createRandomShoppingList();

function sortItemsByBoughtAttribute(
  sourceArrey = shoppingList,
  attribute = true
) {
  /*attribute can be false for 'notbought' items first and true for 'bought' items first*/
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

function sortItemsByKey(
  sourceArrey = shoppingList,
  itemName = "product",
  attribute = true
) {
  /*attribute can be false for decrease sorting and true for increase sorting
  itemName can be any key of Item in the sourceArrey*/
  let source = JSON.parse(JSON.stringify(sourceArrey));

  if (attribute) {
    let byitemName = (a, b) => (a[itemName] > b[itemName] ? 1 : -1);
    const sortedItemsByItemName = source.sort(byitemName);
    return sortedItemsByItemName;
  } else {
    let byitemName = (a, b) => (a[itemName] > b[itemName] ? -1 : 1);
    const sortedItemsByItemName = source.sort(byitemName);
    return sortedItemsByItemName;
  }
}

export { sortItemsByBoughtAttribute, sortItemsByKey };
