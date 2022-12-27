"use strict";

import { Item } from "./random_list_creation.js";

function addItemToList(
  sourceArray,
  newProduct,
  newIsBought,
  newQuantity,
  newPrice
) {
  const source = JSON.parse(JSON.stringify(sourceArray));
  const newProductInSource = source.find(
    (item) => item["product"] === newProduct && item["price"] === newPrice
  ); /* check for the existence of the product in the array */

  if (newProductInSource === undefined) {
    const instanceOfNewItem = new Item(
      newProduct,
      newIsBought,
      newQuantity,
      newPrice
    );
    source.push(
      instanceOfNewItem
    ); /* if check is out of result - adding a new object */
    return source;
  } else {
    source.forEach(function (item) {
      if (item["product"] === newProduct && item["price"] === newPrice) {
        item["quantity"] += newQuantity;
        item["sum"] = Number((item["quantity"] * item["price"]).toFixed(2));
      }
    }); /* changing of quantity and sum */
    return source;
  }
}

function addItemToListAfterBuying(sourceArray, sourceArrayIndex) {
  /* sourceArrayIndex - index of the Item in sourceArray to be deleted */
  const source = JSON.parse(JSON.stringify(sourceArray));
  source[sourceArrayIndex].isBought = true; /* changing of isBought value */

  return source;
}

function deleteItemFromList(sourceArray, sourceArrayIndex) {
  /* sourceArrayIndex - index of the Item in sourceArray to be deleted */
  const sourceAfterItemDelete = JSON.parse(JSON.stringify(sourceArray));
  const itemToDelete = sourceAfterItemDelete.splice(
    +sourceArrayIndex,
    1
  ); /* change source array by .splice method */

  return sourceAfterItemDelete;
}

export { addItemToList, addItemToListAfterBuying, deleteItemFromList };
