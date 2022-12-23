"use strict";

import { Item } from "./random_list_creation.js";

function addItemToList(
  sourceArrey,
  newProduct,
  newIsBought,
  newQuantity,
  newPrice
) {
  let source = JSON.parse(JSON.stringify(sourceArrey));
  let findNewProduct = source.find(
    (item) => item["product"] === newProduct && item["price"] === newPrice
  );

  if (findNewProduct === undefined) {
    let newlistItem = new Item(newProduct, newIsBought, newQuantity, newPrice);
    source.push(newlistItem);
  } else {
    source.forEach(function (item) {
      if (item["product"] === newProduct && item["price"] === newPrice) {
        item["quantity"] += newQuantity;
        item["sum"] = Number((item["quantity"] * item["price"]).toFixed(2));
      }
    });
  }

  return source;
}

function addItemToListAfterBuying(sourceArrey, sourceArreyIndex) {
  let source = JSON.parse(JSON.stringify(sourceArrey));
  source[sourceArreyIndex].isBought = true;

  return source;
}

function deleteItemFromList(sourceArrey, sourceArreyIndex) {
  /*sourceArreyIndex - index of the Item in sourceArrey to be deleted*/
  let itemsAfterDelete = JSON.parse(JSON.stringify(sourceArrey));
  let deletedItem = itemsAfterDelete.splice(sourceArreyIndex, 1);
  return itemsAfterDelete;
}

export { addItemToList, addItemToListAfterBuying, deleteItemFromList };
