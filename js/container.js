"use strict";

const STORAGE = {};
STORAGE.list = []; /* create the global array */

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";

const buttonNewList = document.querySelector(".new-list");
const buttonSorting = document.querySelector(".sorting");
const buttonFiltering = document.querySelector(".filtering");
const buttonNewItem = document.querySelector(".new-item");

function createNewList() {
  let shoppingList = creation.returnCompleteShoppingList();
  let htmlContainer = document.querySelector(".list");
  let htmlData = output.createTableWithListItems(shoppingList);

  setTimeout(
    () => (htmlContainer.innerHTML = htmlData),
    500
  ); /* Add a new shoppling list to the page with the delay */

  setTimeout(() => (document.querySelector(".sorting").disabled = false), 2000);
  setTimeout(
    () => (document.querySelector(".filtering").disabled = false),
    2500
  );
  setTimeout(
    () => (document.querySelector(".new-item").disabled = false),
    3000
  ); /* Make control-buttons visible at the first callback with the delay */

  STORAGE.list = shoppingList; /* update the global array */
}

function buyItem(sourceArreyIndex) {
  let sourceArrey = STORAGE.list;
  let addItem = change.addItemToListAfterBuying(sourceArrey, sourceArreyIndex);

  STORAGE.list = addItem; /* update the global array */

  let htmlContainer = document.querySelector(".list");
  let htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}

function removeItem(sourceArreyIndex) {
  let sourceArrey = STORAGE.list;
  let removeItem = change.deleteItemFromList(sourceArrey, sourceArreyIndex);

  STORAGE.list = removeItem.itemsAfterDelete; /* update the global array */

  let htmlContainer = document.querySelector(".list");
  let htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}

function addNewItem() {
  let sourceArrey = STORAGE.list;
  let newProduct = "Amphetamine"; /* for testing purpose */
  let newIsBought = false;
  let newQuantity = 1;
  let newPrice = 10;
  let addItem = change.addItemToList(
    sourceArrey,
    newProduct,
    newIsBought,
    newQuantity,
    newPrice
  );

  STORAGE.list = addItem; /* update the global array */

  let htmlContainer = document.querySelector(".list");
  let htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}

// ivent listeners

buttonNewList.addEventListener("click", createNewList);

buttonNewItem.addEventListener("click", addNewItem);

document.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("cart")) {
    buyItem(event.target.innerHTML);
  }
}); /* wait for the "buy" button to be clicked and read the index of the selected object in the array */

document.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("bin")) {
    removeItem(event.target.innerHTML);
  }
}); /* wait for the "remove" button to be clicked and read the index of the selected object in the array */
