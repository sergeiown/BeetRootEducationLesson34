"use strict";

const STORAGE = {};
STORAGE.list = [];

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";

const buttonNewList = document.querySelector(".new-list");

function createNewList() {
  let shoppingList = creation.returnCompleteShoppingList();
  let container = document.querySelector(".list");
  let htmlData = output.createTableWithListItems(shoppingList);

  setTimeout(
    () => (container.innerHTML = htmlData),
    500
  ); /* Add a new shoppling list to the page */

  setTimeout(() => (document.querySelector(".sorting").disabled = false), 2000);
  setTimeout(
    () => (document.querySelector(".filtering").disabled = false),
    2500
  );
  setTimeout(
    () => (document.querySelector(".new-item").disabled = false),
    3000
  ); /* Make control-buttons visible at the first callback */

  STORAGE.list = shoppingList;
}

function buyListItem() {}

function removeListItem() {}

// ivent listeners

buttonNewList.addEventListener("click", createNewList);
