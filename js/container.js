"use strict";

window.STORAGE = {}; /* Yes, I know it's an anti-pattern */
STORAGE.list = []; /* Create the global array */

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";
import * as addnew from "./form_addnew.js";
import * as buyremove from "./form_buy_remove.js";

const tableShoppingList = document.querySelector(".list");
const buttonNewList = document.querySelector(".new-list");
const buttonSorting = document.querySelector(".sorting");
const buttonFiltering = document.querySelector(".filtering");
const buttonNewItem = document.querySelector(".new-item");

function createNewList() {
  const shoppingList = creation.returnCompleteShoppingList();
  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(shoppingList);

  setTimeout(
    () => (htmlContainer.innerHTML = htmlData),
    500
  ); /* Add a new shoppling list to the page with the delay */

  setTimeout(
    () =>
      (htmlContainer.style.background =
        "url(../img/drugstore.png) bottom right / 45% no-repeat"),
    500
  ); /* Change background with the delay */

  setTimeout(() => (document.querySelector(".sorting").disabled = false), 2500);
  setTimeout(
    () => (document.querySelector(".filtering").disabled = false),
    3000
  );
  setTimeout(
    () => (document.querySelector(".new-item").disabled = false),
    3500
  ); /* Make control-buttons visible at the first callback with the delay */

  STORAGE.list = shoppingList; /* update the global array */
}

// main ivent listeners-----
buttonNewList.addEventListener("click", createNewList);

buttonNewItem.addEventListener("click", addnew.showActionFormNewItem);

tableShoppingList.addEventListener("click", function (event) {
  if (event.target.classList.contains("cart")) {
    buyremove.showActionFormBuyItem(event.target.innerHTML);
  } else if (event.target.classList.contains("bin")) {
    buyremove.showActionFormRemoveItem(event.target.innerHTML);
  }
}); /* wait for the "buy" or "remove" button to be clicked and read the index of the selected object in the array */
