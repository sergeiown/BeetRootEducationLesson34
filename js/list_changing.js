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

  const indexOfNewProductInSource = source.findIndex(
    (item) => item["product"] === newProduct && item["price"] === newPrice
  );

  if (indexOfNewProductInSource === -1) {
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
    source[indexOfNewProductInSource].quantity += newQuantity;
    source[indexOfNewProductInSource].sum =
      source[indexOfNewProductInSource].quantity *
      source[indexOfNewProductInSource].price;

    return source; /* changing of quantity and sum */
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
