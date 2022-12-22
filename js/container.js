"use strict";

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";

const shoppingList = creation.createRandomShoppingList();

function addItemToList() {}

function deleteItemFromList() {}

console.log(shoppingList);
// console.log(sort.sortItemsByBoughtAttribute(shoppingList, false));
// console.log(sort.sortItemsByKey(shoppingList, "product", false));

// for (let index = 0; index < Math.round(Math.random() * 5) + 5; index++) {
//   console.log(index);
// }
