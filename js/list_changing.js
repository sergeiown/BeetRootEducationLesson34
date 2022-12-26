"use strict";

import { Item } from "./random_list_creation.js";

function addItemToList(
  sourceArray,
  newProduct,
  newIsBought,
  newQuantity,
  newPrice
) {
  let source = JSON.parse(JSON.stringify(sourceArray));
  let findNewProduct = source.find(
    (item) => item["product"] === newProduct && item["price"] === newPrice
  ); /* check for the existence of the product in the array */

  if (findNewProduct === undefined) {
    let newlistItem = new Item(newProduct, newIsBought, newQuantity, newPrice);
    source.push(
      newlistItem
    ); /* if check is out of result - adding a new object */
  } else {
    source.forEach(function (item) {
      if (item["product"] === newProduct && item["price"] === newPrice) {
        item["quantity"] += newQuantity;
        item["sum"] = Number((item["quantity"] * item["price"]).toFixed(2));
      }
    }); /* adjustment of quantity and sum */
  }

  return source;
}

function addItemToListAfterBuying(sourceArray, sourceArrayIndex) {
  /* sourceArrayIndex - index of the Item in sourceArray to be deleted */
  let source = JSON.parse(JSON.stringify(sourceArray));
  source[sourceArrayIndex].isBought = true; /* adjustment of isBought value */

  return source;
}

function deleteItemFromList(sourceArray, sourceArrayIndex) {
  /* sourceArrayIndex - index of the Item in sourceArray to be deleted */
  let itemsAfterDelete = JSON.parse(JSON.stringify(sourceArray));
  let itemsToDelete = itemsAfterDelete.splice(
    +sourceArrayIndex,
    1
  ); /* change itemsAfterSelete array by .splice method */

  return itemsAfterDelete;
}

export { addItemToList, addItemToListAfterBuying, deleteItemFromList };
