"use strict";

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";

const shoppingList = creation.createRandomShoppingList();

function createNewList() {
  document.querySelector(".list").innerHTML =
    output.createTableWithListItems(shoppingList);
}

createNewList();
