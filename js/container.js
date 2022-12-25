"use strict";

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";

const buttonNewList = document.querySelector(".new-list");

function createNewList() {
  let shoppingList = creation.returnCompleteShoppingList();
  const list = document.querySelector(".list");

  list.innerHTML = output.createTableWithListItems(shoppingList);
}

function buyListItem() {}

function removeListItem() {}

// ivent listeners
buttonNewList.addEventListener("click", createNewList);
